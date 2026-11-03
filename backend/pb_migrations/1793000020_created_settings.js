/// <reference path="../pb_data/types.d.ts" />

/**
 * `settings` — key/value rows the hooks read. Same shape as the landing
 * backend so its auto-responder copy can be pasted straight across.
 *
 * Seeds the `autoresponder` row DISABLED: while this site is a preview, test
 * sign-ups must not send real confirmation emails. Enable it from the
 * PocketBase dashboard (Collections → settings) at launch, after SMTP is set.
 */
migrate(
	(app) => {
		const collection = new Collection({
			type: 'base',
			name: 'settings',
			createRule: null,
			listRule: null,
			viewRule: null,
			updateRule: null,
			deleteRule: null,
			fields: [
				{ name: 'key', type: 'text', required: true, presentable: true },
				{ name: 'enabled', type: 'bool' },
				{ name: 'subject', type: 'text', max: 200 },
				{ name: 'sender_name', type: 'text', max: 100 },
				{ name: 'body', type: 'editor' }
			],
			indexes: ['CREATE UNIQUE INDEX idx_settings_key ON settings (`key`)']
		});
		app.save(collection);

		const record = new Record(collection);
		record.set('key', 'autoresponder');
		record.set('enabled', false);
		record.set('sender_name', 'JobBeta Team');
		record.set('subject', "You're on the JobBeta waitlist, {{name}}!");
		record.set(
			'body',
			[
				'<h2>Welcome aboard, {{name}}!</h2>',
				'<p>Thanks for joining the JobBeta waitlist. You are officially in line for early access.</p>',
				'<p>JobBeta connects students and recent graduates with employers looking for emerging talent. We will email <strong>{{email}}</strong> the moment we go live.</p>',
				'<p>Talk soon,<br/>The JobBeta Team</p>'
			].join('')
		);
		app.save(record);
	},
	(app) => {
		return app.delete(app.findCollectionByNameOrId('settings'));
	}
);
