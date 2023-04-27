import * as linkService from "$lib/server/linkService";
import { error } from "@sveltejs/kit";

/** @type {import("./$types").PageServerLoad} */
export async function load({ params }) {
  const { id } = params;
  const link = await linkService.findLink(id);
  if (!link) {
    throw error(404, "Not found");
  }
  return {
    link
  };
}