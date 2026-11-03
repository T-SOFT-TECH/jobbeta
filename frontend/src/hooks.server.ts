import { redirect, type Handle } from '@sveltejs/kit';
import { retiredRoutes } from '$lib/config/site';

/** Old links to removed or merged pages land somewhere useful. */
export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname;
	const retired = retiredRoutes.find((r) => path === r.prefix || path.startsWith(`${r.prefix}/`));
	if (retired) redirect(retired.permanent ? 308 : 307, retired.to);
	return resolve(event);
};
