/// <reference path="../pb_data/types.d.ts" />

/**
 * `waitlist` — sign-ups from every form on the site.
 *
 * Deliberately a SUPERSET of the landing page's collection (jobbeta.ng,
 * C:/Users/USER/Documents/WEBSITES/jobBeta/landing/backend). Same field names
 * and the same stored role values, so at launch the landing records import
 * unchanged with scripts/import-landing-waitlist.mjs.
 *
 *   landing:  full_name*, email*, phone, role* (talent|employer), interest
 *   here:     + role career_centre, + institution, institution_type, source
 *             full_name is optional (email-only capture forms), so every
 *             landing record still fits.
 *
 * Roles stay 'talent' (not 'student') because the landing auto-responder and
 * dashboard both key off that stored value.
 */
migrate(
	(app) => {
		const collection = new Collection({
			type: 'base',
			name: 'waitlist',
			// Anyone may join; only superusers can read, edit or delete.
			createRule: '',
			listRule: null,
			viewRule: null,
			updateRule: null,
			deleteRule: null,
			fields: [
				{ name: 'full_name', type: 'text', max: 120, presentable: true },
				{ name: 'email', type: 'email', required: true },
				{ name: 'phone', type: 'text', max: 20 },
				{
					name: 'role',
					type: 'select',
					required: true,
					maxSelect: 1,
					values: ['talent', 'employer', 'career_centre']
				},
				{ name: 'interest', type: 'text', max: 500 },
				{ name: 'institution', type: 'text', max: 160 },
				{ name: 'institution_type', type: 'text', max: 80 },
				// Which form the sign-up came from, e.g. "waitlist-page", "home-kickstart"
				{ name: 'source', type: 'text', max: 60 },
				{ name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
				{ name: 'updated', type: 'autodate', onCreate: true, onUpdate: true }
			],
			indexes: ['CREATE UNIQUE INDEX idx_waitlist_email ON waitlist (email)']
		});

		return app.save(collection);
	},
	(app) => {
		return app.delete(app.findCollectionByNameOrId('waitlist'));
	}
);
