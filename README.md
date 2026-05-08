# Valeria Iezzi — Portfolio

Personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
Deployed on **Vercel**.

---

## Editing content

All text, project descriptions, bio, and image paths live in one file:

```
content/data.ts
```

Search for `← Update` comments to find every field you can personalise.

---

## Replacing images

| File | Used for |
|---|---|
| `public/photo.png` | Profile photo in the hero |
| `public/images/ikea-card.png` | IKEA project card & hero |
| `public/images/suitsupply-card.png` | Suitsupply project card & hero |
| `public/images/sandvik-card.png` | Sandvik project card & hero |
| `public/images/assa-abloy-card.png` | Assa Abloy project card & hero |
| `public/images/grocery-card.png` | Grocery App project card & hero |
| `public/cv-valeria-iezzi.pdf` | CV download link |

Replace any file with a new one of the same name to update it automatically.

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the GitHub repo.
3. Vercel will detect Next.js automatically — no settings to change.
4. Click **Deploy**. Your live URL will appear when the build finishes.

Every time you push a commit to GitHub, Vercel rebuilds and redeploys automatically.

---

## Project structure

```
app/
  page.tsx                  ← Homepage
  projects/[slug]/page.tsx  ← Project detail pages
  layout.tsx                ← Font loading, metadata
  globals.css               ← Tag colours, base styles
components/
  Tag.tsx                   ← Coloured pill tags
  CompanyLogo.tsx           ← Client logo marks
content/
  data.ts                   ← All content (edit here)
public/
  photo.png                 ← Profile photo
  images/                   ← Project images
  cv-valeria-iezzi.pdf      ← CV
tailwind.config.ts          ← Design tokens (colours, fonts)
```
