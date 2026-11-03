/// <reference path="../pb_data/types.d.ts" />

/**
 * `enquiries` — messages from the Contact page.
 *
 * enquiry_type mirrors the client's dropdown (review v2, Contact Us §2):
 * General Enquiry, Account Support, Partnership, Request a Demo, Other.
 */
migrate(
	(app) => {
		const collection = new Collection({
			type: 'base',
			name: 'enquiries',
			createRule: '',
			listRule: null,
			viewRule: null,
			updateRule: null,
			deleteRule: null,
			fields: [
				{ name: 'name', type: 'text', required: true, max: 120, presentable: true },
				{ name: 'email', type: 'email', required: true },
				{
					name: 'enquiry_type',
					type: 'select',
					required: true,
					maxSelect: 1,
					values: ['general', 'support', 'partnership', 'demo', 'other']
				},
				{ name: 'organisation', type: 'text', max: 160 },
				{ name: 'message', type: 'text', required: true, max: 5000 },
				{ name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
				{ name: 'updated', type: 'autodate', onCreate: true, onUpdate: true }
			]
		});

		return app.save(collection);
	},
	(app) => {
		return app.delete(app.findCollectionByNameOrId('enquiries'));
	}
);
