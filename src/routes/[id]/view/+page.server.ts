import * as linkService from "$lib/server/linkService";
import { error } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

export const load = (async ({ params, locals }) => {
  const session = await locals.getSession();
  const userId = session?.user?.id;

  const { id } = params;
  const link = await linkService.findLink(id);
  if (!link) {
    throw error(404, "Not found");
  }

  const isOwner = !!userId && userId === link.creator;

  return {
    link,
    isOwner
  };
}) satisfies PageServerLoad;