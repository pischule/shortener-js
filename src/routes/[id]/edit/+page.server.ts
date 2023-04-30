import * as linkService from "$lib/server/linkService";
import { error, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { isUrlValid } from "$lib/util";
import prisma from "$lib/server/prisma";

export const load = (async ({ params }) => {
  const { id } = params;
  const link = await linkService.findLink(id);
  if (!link) {
    throw error(404, "Not found");
  }
  return {
    link
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  delete: async ({ locals, params }) => {
    const linkId = params.id;
    const session = await locals.getSession();
    const userId = session?.user?.id;
    if (!userId) {
      throw error(401, "Unauthorized");
    }

    await prisma.link.deleteMany({
      where: {
        id: linkId,
        creator: userId
      }
    });
    throw redirect(303, "/my-links");
  },
  update: async ({ request, locals, params }) => {
    const linkId = params.id;
    const session = await locals.getSession();
    const userId = session?.user?.id;
    if (!userId) {
      throw error(401, "Unauthorized");
    }

    const data = await request.formData();
    if (!data) {
      throw error(400, "Empty request body");
    }

    const url = data.get("url");
    if (typeof url !== "string" || !isUrlValid(url)) {
      throw error(400, "Invalid url");
    }

    await prisma.link.updateMany({
      where: {
        id: linkId,
        creator: userId
      },
      data: { url }
    });

    throw redirect(303, "view");
  }
};