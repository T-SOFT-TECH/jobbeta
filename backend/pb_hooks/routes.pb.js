/// <reference path="../pb_data/types.d.ts" />

/**
 * Public endpoint: GET /api/waitlist-count
 * Returns the number of people on the waitlist (used for social proof on the landing page).
 */
routerAdd('GET', '/api/waitlist-count', (e) => {
	let total = 0;
	try {
		total = $app.countRecords('waitlist');
	} catch (err) {
		$app.logger().error(`[waitlist-count] ${err}`);
	}
	return e.json(200, { total });
});
