import { error, redirect } from "@sveltejs/kit";

import * as linkService from "$lib/server/linkService";
import { isUrlValid } from "$lib/util";

/** @type {import("./$types").Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    if (!data) {
      throw error(400, "Empty request body");
    }

    const url = data.get("url");
    if (typeof url !== "string" || !isUrlValid(url)) {
      throw error(400, "Invalid url");
    }

    const link = await linkService.saveLink(url);
    throw redirect(303, `${link.id}/view`);
  }
};