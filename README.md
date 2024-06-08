# Cloudtify

A simple podcast website that allows users to listen to podcasts. Also with AI to generate audio and image from text. It's simple you can use it to listen to podcasts and read the show notes.

<!-- Image goes here -->

## Features

-  [x] Authentication
-  [x] Listen to podcasts
-  [x] Read show notes
-  [x] Generate audio from text
-  [x] Generate image from text
-  [x] Create a podcast
-  [x] Coming soon

## Tech Stack

**Client:** Next.js, Typescript, TailwindCSS, Clerk

**Server:** Convex

## Shadcn-ui Setup & Dependencies

Init project with `npx shadcn-ui@latest init`

Will create "./components" & "./lib" folder by `default` and some packages in `package.json`

-  [class-variance-authority](https://www.npmjs.com/package/class-variance-authority) - manage class variance in tailwindcss
-  [clsx](https://www.npmjs.com/package/clsx) - A tiny (228B) utility for constructing `className` strings conditionally.
-  [lucide-react](https://www.npmjs.com/package/lucide-react) - open-source Feather icons as React components.
-  [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) - A Tailwind CSS plugin to merge classes together.
-  [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate) - A plugin to generate animation utilities for Tailwind CSS.

Then remove unnecessary code in `globals.css` and `tailwind.config.ts` with your custom code.

Start add components using this command

```bash
npx shadcn-ui@latest add component
```

List of components in this project

-  [x] Button - `button` (@radix-ui/react-slot)

## Dependencies General

## Getting Started for Development

-  [x] Clone the project
-  [x] Install dependencies
-  [x] Run the development server
-  [x] Fill .env / .env.local file with your own values

```bash
git clone
cd cloudtify
npm install
npm run dev
```
