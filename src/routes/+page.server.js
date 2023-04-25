import { error, redirect } from "@sveltejs/kit";

// @ts-ignore
import * as db from "$lib/server/database";
// @ts-ignore
import { isUrlValid } from "$lib/util";

/** @type {import("./$types").Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const url = data.get("url");
    if (!isUrlValid(url)) {
      throw error(400, "Invalid url");
    }
    const link = db.saveLink(url);
    throw redirect(303, `${link.id}/view`);
  }
};