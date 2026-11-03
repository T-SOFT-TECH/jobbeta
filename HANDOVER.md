# JobBeta — Decisions & Inputs Needed

Handover note following implementation of the website review (JobBeta Website Review.docx).
All other items in the review document are implemented. The items below require decisions, content, or setup from the JobBeta team.

## A. Decisions (the review's open questions)

1. **Testimonials are fabricated** (students: Amina/Tolu/Sarah; employers: Mr. Ade/Alex/Linda; home carousel). Options: remove until real ones exist, or replace with product-value cards. *Recommend: remove for MVP.*
2. **Unrealistic numbers**: "5000+" kick-start card, "10,000+" tracker, "500k+/3,000+/80k" stats, "Trusted by over 5,000 employers", "1000 jobs live – 120 added today", "nearly 1 million employers". *Recommend: remove or swap to launch-safe copy ("Launching soon").*
3. **Real company logos/names** (Shell, First Bank, Moniepoint, Paystack, Dangote on home + employers strip). *Recommend: replace with placeholder/fictional brands until partnerships are signed.*
4. **Curated jobs section icons are blank** — the actual Figma icon assets were never exported. Need the files, or approve placeholder icons.
5. **BetaMatch naming** — Tosin's dashboard designs say "BetaMatch" (visible in the dashboard images now on the site). Confirm: keep as a product name, or should it read JobBeta?

## B. Content / assets to provide

6. **Real pricing** — employer pricing page (currently ₦20 crossed from ₦40) and products page plans (Enterprise Basic ₦80, etc.), or approve replacing with "Contact Sales".
7. **Employer brand names** — list of companies for the moving logo marquee (or confirm fictional names).
8. **Products page rework** — review says "will have to be reworked" but gives no target; send updated Figma or a short brief.
9. **Career page hero picture** — the current photo already matches the Figma reference; confirm leave-as-is or send the replacement image.
10. **Contact details** — done: hello@jobbeta.ng (`contact.email` in `src/lib/config/site.ts`); socials are LinkedIn (company/jobbeta-ng) and Instagram (usejobbeta).

## C. Setup on your side

11. **Backend** — the PocketBase collections are now defined as migrations in `backend/` (no hand-made setup). See `backend/README.md` for deploying them, and the launch checklist for merging the jobbeta.ng landing sign-ups into this backend.
12. **Production env** — set `PUBLIC_POCKETBASE_URL` to the live PocketBase URL (the code falls back to `127.0.0.1:8090`).
