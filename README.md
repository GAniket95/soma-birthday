# Birthday Surprise

A cinematic romantic birthday website for Aarohi built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Six interactive romantic chapters
- Responsive, cinematic one-page experience
- Background music with play/pause and mute controls
- Editable centralized configuration
- Motion-driven animations and elegant transitions
- Clean Netlify/Vercel deployment setup

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion + GSAP
- Lucide React

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal.

## Customize the surprise

All personal content is stored in `src/config/birthdayData.ts`.

Edit the following values there:

- `herName`
- `senderName`
- `birthdayMessage`
- `music`
- `memories`
- `questions`
- `timeline`
- `futureMessages`
- `finalLetter`

The birthday screen currently uses an illustrated sample portrait at `public/images/birthday-portrait.svg`. To replace it with her photo, copy the photo into `public/images` and update `heroImage` and `heroImageAlt` in `src/config/birthdayData.ts` (for example, `'/images/aarohi.jpg'`).

To replace the sample artwork in the memories, add your own image files in `public/images` and update the `image` paths in the config.

Chapter music is configured in `chapterMusic` in `src/config/birthdayData.ts`. Add a separate audio file for each chapter under `public/music`, then update that chapter's `src`. The birthday-song file plays when the balloon is popped; after that, music switches to the selected chapter's track and continues playing. Sample original WAV tracks are included for the five story chapters. Replace them with your own MP3 or WAV tracks when ready. If a configured audio file is missing, music for that chapter will not play and the player displays an error.

## Production build

```bash
npm run build
```

## Deployment

This project is ready for static hosting on Netlify or Vercel.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Notes

- Music starts only after an explicit user interaction.
- The app is designed for mobile-first responsiveness and performance.
- The sample images are local SVG placeholders to keep the project self-contained.
