import { error, redirect } from "@sveltejs/kit";

import * as linkService from "$lib/server/linkService";
import { isUrlValid } from "$lib/util";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    if (!data) {
      throw error(400, "Empty request body");
    }

    const url = data.get("url");
    if (typeof url !== "string" || !isUrlValid(url)) {
      throw error(400, "Invalid url");
    }

    const session = await locals.getSession();
    const email = session?.user?.email ?? null;

    const link = await linkService.saveLink(url, email);
    throw redirect(303, `${link.id}/view`);
  }
};