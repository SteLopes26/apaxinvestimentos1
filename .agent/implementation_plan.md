# Convert FAQ to Accordion

## Goal Description
Replace the static FAQ list in `index.html` with an accessible accordion using HTML `<details>` and `<summary>` elements. This provides a cleaner UI where only questions are visible until clicked.

## Proposed Changes
- Modify the `<section class="faq-section">` block in `index.html`.
- Replace each `.faq-item` `<div>` with a `<details>` element containing a `<summary>` for the question and a `<p>` for the answer.
- Keep existing styling classes for consistency and add minimal CSS if needed (the existing styles already handle spacing).

## Verification Plan
### Manual Verification
1. Run `npm run dev` to start the Vite dev server.
2. Open `http://localhost:5173/` in a browser.
3. Scroll to the FAQ section.
4. Click each question; ensure the answer expands/collapses correctly.
5. Verify the page layout remains intact and responsive.

If any issue is observed, adjust the HTML accordingly.
