import { error, redirect } from '@sveltejs/kit';

import * as linkService from '$lib/server/linkService';
import { isUrlValid } from '$lib/util';
import type { Actions } from './$types';

export const actions = ({
	default: async ({ request, locals }) => {
		const data = await request.formData();
		if (!data) {
			throw error(400, 'Empty request body');
		}

		const url = data.get('url');
		if (typeof url !== 'string' || !isUrlValid(url)) {
			throw error(400, 'Invalid url');
		}

		const session = await locals.getSession();
		const id = session?.user?.id;
		const link = await linkService.saveLink(url, id);
		throw redirect(303, `${link.id}/view`);
	}
}) satisfies Actions;