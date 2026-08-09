# ibocus.github.io

Personal portfolio hub for Iqbal Bocus, PMP&reg; &mdash; PM + security governance builder, on the path to CISO.

Live at [ibocus.github.io](https://ibocus.github.io).

Built on [react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) by Yuji Sato (MIT licensed), customized with real content, a rebranded indigo/gold visual identity, and generated on-brand project tiles instead of screenshots.

## Local development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`. No manual `npm run deploy` step needed &mdash; just push.

## Structure

Edit content in `src/components/`:
- `Main.tsx` &mdash; hero / bio
- `Expertise.tsx` &mdash; the three pillars (governance, delivery, building)
- `Timeline.tsx` &mdash; career history
- `Project.tsx` &mdash; shipped tools (CyberReady, Registry, CISM tools, PM toolkit)
- `Contact.tsx` &mdash; contact links
