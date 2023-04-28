import * as linkService from "$lib/server/linkService";
import { error } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

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