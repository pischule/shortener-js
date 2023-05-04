import { fail, redirect } from '@sveltejs/kit';

import * as linkService from '$lib/server/linkService';
import { isUrlValid } from '$lib/util';
import type { Actions } from './$types';

export const actions = ({
	default: async ({ request, locals }) => {
		const data = await request.formData();

		const url = data.get('url');
		if (typeof url !== 'string' || !isUrlValid(url)) {
			return fail(400, {url, invalid: true})
		}

		const session = await locals.getSession();
		const id = session?.user?.id;
		const link = await linkService.saveLink(url, id);
		throw redirect(303, `${link.id}/view`);
	}
}) satisfies Actions;