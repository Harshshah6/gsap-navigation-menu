
# Animated Navigation Drawer – Next.js + GSAP

A modern animated navigation drawer built with **Next.js (App Router)** and **GSAP**, featuring smooth page transitions and expressive motion design.  
Inspired by the interaction style and visual rhythm of [creativegiants.art](https://www.creativegiants.art/).

---

## ✨ Features

- Animated navigation drawer with GSAP timelines
- Smooth open / close transitions with staggered elements
- Page transitions between routes
- Built using Next.js App Router
- Clean and minimal design inspired by creative studio websites
- Fully client-side animations with optimized performance

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **React**
- **GSAP (GreenSock Animation Platform)**
- **Tailwind**
- **TypeScript**

---

## 📁 Project Structure (Example)

```bash
📁naara-entertainment
    ├── 📁public
    |   ├── showreel.mp4    # Main Background Showreel
    ├── 📁src
    |   ├── 📁app
    |   |   ├── 📁contact
    |   |   ├── 📁news
    |   |   ├── 📁process
    |   |   ├── 📁projects
    |   |   ├── favicon.ico
    |   |   ├── globals.css
    |   |   ├── layout.tsx
    |   |   ├── page.tsx
    |   └── 📁components
    |       ├── Menu.tsx    # Animated Navigation Menu
    ├── .gitignore
    ├── bun.lock
    ├── eslint.config.mjs
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── README.md
    └── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/harshshah6/gsap-navigation-menu.git
cd gsap-navigation-menu
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🎬 Animations Overview

* **Navigation Drawer**

  * GSAP timeline controls open and close states
  * Text and links animate with staggered reveals
  * Overlay and background transitions enhance depth

* **Page Transitions**

  * Triggered on route change
  * Uses layout-level animation wrappers
  * Prevents layout jumps during navigation

---

## 🧠 Inspiration

This project is inspired by modern creative studio websites, particularly
👉 **[https://www.creativegiants.art/](https://www.creativegiants.art/)**

The goal was not to copy, but to **recreate the feel and interaction quality** using custom code and animations.

---

## 📌 Notes

* Animations are handled on the client using `"use client"`
* GSAP contexts are properly cleaned up to avoid memory leaks
* The project is designed for learning, experimentation, and inspiration

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Acknowledgements

* [GSAP](https://greensock.com/gsap/)
* [Next.js](https://nextjs.org/)
* [creativegiants.art](https://www.creativegiants.art/)
