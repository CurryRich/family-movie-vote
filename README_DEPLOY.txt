# Family Movie Selection Tally — Mobile UX Update

This version fixes the UX issue from the oversized sticky header.

Changes:
- Header is no longer fixed/sticky.
- Controls moved to a fixed bottom toolbar.
- Posters appear much higher on mobile and desktop.
- Bottom bar includes search, sort, CSV export, refresh, and progress.
- Shared voting function setup remains the same.

Netlify settings:
- Base directory: leave blank
- Build command: npm install
- Publish directory: .
- Functions: netlify/functions

After deploy, test:
https://YOUR-SITE.netlify.app/.netlify/functions/votes
