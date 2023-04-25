// @ts-ignore
import * as db from "$lib/server/database";
import { error } from "@sveltejs/kit";

/** @type {import("./$types").PageServerLoad} */
export async function load({ params }) {
  const { id } = params;
  const link = db.findLink(id);
  if (!link) {
    throw error(404, "Not found");
  }
  return {
    link
  };
}