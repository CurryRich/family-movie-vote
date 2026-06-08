# Family Movie Selection Tally — v9 Working Clear All

This version adds a real Clear All reset flow.

Frontend:
- Adds a visible Clear All button in the bottom control dock.
- Shows compact “votes” label to avoid text clipping.
- Calls POST /.netlify/functions/votes?clear=1.

Backend:
- Netlify Function now handles clear=1.
- It deletes all stored vote event blobs.
- The shared tally resets to zero for everyone.

Netlify settings:
- Base directory: leave blank
- Build command: npm install
- Publish directory: .
- Functions: netlify/functions

After deploy, test:
https://YOUR-SITE.netlify.app/.netlify/functions/votes

To test Clear All manually:
Send POST to:
https://YOUR-SITE.netlify.app/.netlify/functions/votes?clear=1
