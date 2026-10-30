# Riddhi Dhanawade | Portfolio

A responsive React (Vite) portfolio with About, Projects, Skills, Resume and Contact sections.

**Live site:** _add your deployed URL here_
**Screenshots:** _add desktop and mobile screenshots to a `/screenshots` folder and link them here_

## Run locally
```bash
npm install
npm run dev          # development server
npm run build        # production build into dist/
npm run preview      # serve the production build at http://localhost:4173
```

## What was built
- React 18 components, one per section, with content kept in `src/data.js` so updates need no JSX changes.
- Responsive CSS: fluid type with `clamp()`, CSS grid that reflows, and a mobile menu below 820px.
- Light and dark themes via `prefers-color-scheme`, visible keyboard focus, skip link, reduced-motion support.
- Contact form opens the visitor's email app (`mailto:`), so no backend is required.

## Performance
- **Lazy components:** About, Projects, Skills, Resume and Contact use `React.lazy`, and `LazySection` only mounts them (and downloads their chunk) when they are within 400px of the viewport.
- **Lazy images:** project previews use `loading="lazy"`, `decoding="async"` and fixed width/height to avoid layout shift.
- **Minification:** Vite builds with esbuild for JS and CSS. Result: main bundle 148 kB (48 kB gzip), CSS 4 kB (1.5 kB gzip), five section chunks under 1.3 kB each.

## Verify the production build
1. `npm run build && npm run preview`
2. Check: all five nav links scroll to their sections, the resume downloads, project images load as you scroll, the contact form opens a prefilled email, and the mobile menu works (use browser device mode).

## Deployment

### Netlify
1. Push this repo to GitHub.
2. In Netlify: Add new site, Import from Git, choose the repo.
3. Build command `npm run build`, publish directory `dist`.
4. **Custom domain:** Domain management, Add a domain, then set the DNS records Netlify shows. **SSL:** Netlify provisions a free Let's Encrypt certificate automatically once DNS resolves; enable "Force HTTPS".

### Vercel
1. Import the GitHub repo at vercel.com/new. Framework preset: Vite (auto-detected).
2. Deploy. For a custom domain: Project, Settings, Domains, add it and follow the DNS instructions. SSL is issued automatically.

### GitHub Pages
1. Install `gh-pages` (`npm i -D gh-pages`) and add `"deploy": "gh-pages -d dist"` to scripts.
2. `npm run build && npm run deploy`, then enable Pages from the `gh-pages` branch in repo settings.
3. Custom domain: add it under Settings, Pages, and tick "Enforce HTTPS". `base: './'` in `vite.config.js` keeps asset paths working under a repo sub-path.

## Testing checklist (fill in after deploying)
| Check | Result |
|---|---|
| Chrome, Firefox, Edge, Safari load and navigate | |
| Android phone and iPhone layout | |
| Tablet and 1440px+ desktop layout | |
| HTTPS padlock on custom domain | |
| Lighthouse performance score | |

## Challenges and solutions
- **Keeping the first load small:** a long single-page site loads everything up front. Fix: split sections with `React.lazy` and mount them through an `IntersectionObserver` wrapper.
- **Layout jumping while sections load:** the wrapper reserves `min-height: 60vh` until content mounts, and images have explicit dimensions.
- **Asset paths on different hosts:** absolute paths break on GitHub Pages sub-paths. Fix: `base: './'` and relative asset URLs.
- **Contact form without a server:** used `mailto:` instead of paying for or maintaining a backend. Swap in Formspree or Netlify Forms later if you want submissions stored.
- _Add any challenges you hit during deployment and how you solved them._
