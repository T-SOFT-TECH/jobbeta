# JobBeta site backend (PocketBase)

The new site's own backend. It is **separate from the landing page backend**
(jobbeta.ng, `C:/Users/USER/Documents/WEBSITES/jobBeta/landing/backend`) on
purpose: the landing list holds real sign-ups, and this site is still a
preview. At launch the landing records are imported here (see below).

```
pb_migrations/   collections, applied automatically on `serve`
  1793000000_created_waitlist.js    sign-ups (superset of the landing schema)
  1793000010_created_enquiries.js   Contact page messages
  1793000020_created_settings.js    auto-responder settings (seeded DISABLED)
pb_hooks/
  autoresponder.pb.js   confirmation email on waitlist sign-up (ported from landing)
  routes.pb.js          GET /api/waitlist-count
scripts/
  import-landing-waitlist.mjs   launch-day merge of jobbeta.ng sign-ups
```

## Collections

| Collection | Public | Fields |
|---|---|---|
| `waitlist` | create only | `full_name`, `email`* (unique), `phone`, `role`* (`talent` \| `employer` \| `career_centre`), `interest`, `institution`, `institution_type`, `source` |
| `enquiries` | create only | `name`*, `email`*, `enquiry_type`* (`general` \| `support` \| `partnership` \| `demo` \| `other`), `organisation`, `message`* |
| `settings` | none | `key`, `enabled`, `subject`, `sender_name`, `body` |

`waitlist` keeps the landing page's field names and role values (students are
`talent`), so landing records import unchanged. Reading any collection needs a
superuser (PocketBase dashboard at `/_/`).

## Run locally

Use PocketBase **0.39.9**, the same version as the landing backend. Newer
binaries migrate `pb_data` forward one way.

```bash
cd backend
./pocketbase serve --http 127.0.0.1:8090
# frontend/.env:  PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090
```

## Deploy (preview VPS)

1. Copy `pb_migrations/` and `pb_hooks/` next to the PocketBase binary on the
   server and restart it. Migrations run on start.
2. If that PocketBase already has a collection named `waitlist`, `enquiries` or
   `settings` (from the hand-made setup in the old HANDOVER notes), delete it
   first or the migration will stop at that collection.
3. Set the frontend's `PUBLIC_POCKETBASE_URL` to that PocketBase's public URL.

## Launch checklist

1. **SMTP**: dashboard → Settings → Mail settings (sender address on the domain).
2. **Import the landing sign-ups** (re-runnable, skips emails already present):
   ```bash
   SOURCE_URL=https://jobbeta.ng SOURCE_EMAIL=… SOURCE_PASSWORD=… \
   TARGET_URL=https://<this backend> TARGET_EMAIL=… TARGET_PASSWORD=… \
   node backend/scripts/import-landing-waitlist.mjs --dry-run   # then without --dry-run
   ```
   Imported records get `source = "landing:<original sign-up date>"` and the
   auto-responder skips them, so nobody gets a second welcome email.
3. **Enable the auto-responder**: Collections → `settings` → `autoresponder`
   row → tick `enabled`. Edit the subject/body there too.
4. Point jobbeta.ng at the new site. Its `email-logo*.png` files (used by the
   auto-responder from `https://jobbeta.ng/…`) are already in `frontend/static/`.
