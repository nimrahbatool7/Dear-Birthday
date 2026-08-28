# 📜 Case Archive — Interactive Vintage Birthday Website
## Live Demo
[View the website](https://dear-birthday-git-main-nimrahbatool7.vercel.app/)

> **A collection of moments worth keeping.**

**Case Archive** is an interactive, vintage-inspired birthday website designed as a digital archive of memories, letters, hidden notes, surprises, and birthday wishes.

Built with **HTML, CSS, and vanilla JavaScript**, it combines scrapbook aesthetics with interactive animations, Polaroid memories, secret notes, balloons, confetti, and an interactive birthday cake.

---

## ✨ Features

* ✉️ **Animated Envelope** — Opens to reveal a personalized typewriter-style birthday letter.
* 📸 **Polaroid Memories** — Flip cards, hover animations, and fullscreen lightbox viewing.
* 📝 **Interactive Postcard** — Flip the postcard to reveal a hidden message.
* 🔐 **Secret Notes** — Discover hidden messages inside miniature envelopes.
* 🎁 **Gift Surprise** — Animated gift reveal with balloons, confetti, and messages.
* 🎈 **Interactive Balloons** — Click balloons to reveal personalized wishes.
* 🎂 **Birthday Cake** — Light candles sequentially, blow them out individually, and reveal the final message.
* 🎊 **Atmospheric Effects** — Confetti, film grain, dust particles, and subtle animations.
* 📱 **Responsive** — Desktop, tablet, and mobile layouts.
* ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard controls, and reduced-motion support.

---

## 🎨 Design

Inspired by **vintage archives, handwritten letters, postcards, Polaroids, and scrapbooks**.

### Color Palette

| Color     | Hex       |
| --------- | --------- |
| Crimson   | `#6B1D2F` |
| Parchment | `#F5EBE0` |
| Kraft     | `#C4A482` |
| Espresso  | `#2B2421` |
| Rose      | `#B8737B` |
| Gold      | `#D4AF37` |
| Sage      | `#4A5340` |

### Typography

* **Cormorant Garamond** — Headings
* **Lora** — Body text
* **Caveat** — Handwritten messages

---

## ⚙️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* CSS animations & transitions
* CSS transforms, gradients & `clip-path`
* DOM manipulation
* Responsive media queries
* Google Fonts

No frameworks, build tools, or external animation libraries are required.

---

## 📁 Structure

```text
case-archive/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── envelope/
│   ├── memories/
│   ├── decorative/
│   └── postcard-gift/
├── screenshots/
└── README.md
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/YOUR-USERNAME/case-archive.git
cd case-archive
```

Open `index.html` directly, or use VS Code's **Live Server** for development.

---

## 🎀 Personalization

Edit `script.js`:

```js
const RECIPIENT_NAME = 'Sarah';

const BALLOON_MESSAGES = [
  // Add your messages here
];
```

Add your own photographs inside `assets/` and update their paths in `index.html`:

```html
<img src="assets/your-photo.jpg" alt="Description of your memory">
```

---

## 🎞️ Interaction System

The project relies on lightweight CSS classes and JavaScript:

```js
flap.classList.add('open');
polaroid.classList.toggle('flipped');
giftBox.classList.add('opened');
candle.classList.add('lit');
candle.classList.add('out');
```

No animation libraries are required.

---

## 📱 Responsive & Accessible

The layout adapts between desktop and mobile, including typography, Polaroids, balloons, gift elements, and cake spacing.

Accessibility includes:

* Semantic HTML
* ARIA labels
* `aria-live` dynamic messages
* Keyboard/lightbox controls
* Escape-to-close support
* `prefers-reduced-motion`

---

## ⚠️ Limitations

Case Archive is a **client-side static website**.

There is currently:

* No backend or database
* No authentication
* No server-side personalization
* No persistent user state

All interactions run locally in the browser.

---

## 🌐 Deployment

The project can be deployed directly to:

* GitHub Pages
* Netlify
* Vercel
* Cloudflare Pages

No backend server is required.

---

## 🔮 Possible Extensions

* Background music & mute control
* Memory timeline
* Additional secret notes
* Audio messages
* Countdown timer
* Touch gestures
* Shareable personalized URLs
* Downloadable birthday card
* Additional hidden interactions

---

## 📜 License

Primarily intended as a personal creative project. If reused, replace personal photographs, messages, and assets with content you have permission to use.

---

> **Case Archive turns a birthday message into something the recipient can open, discover, interact with, and remember.**
>
> **A collection of moments worth keeping.**
