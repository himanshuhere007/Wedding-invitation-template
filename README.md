# Reshu & Vikas | The Wedding Celebration

A visually stunning, elegant, and interactive frontend static wedding website built to celebrate the marriage of Reshu and Vikas. The design combines a rich Indian wedding theme—featuring maroon, gold, and royal green colors—with modern web interactions and smooth animations.

## ✨ Key Features

- **Luxurious Aesthetic:** Custom ethnic Indian styling with rich gold typography, intricate Ganesha motifs, and themed corner mandalas.
- **Engaging Animations:** Utilizes **AOS.js** for buttery-smooth scroll transformations and **Particles.js** for elegant floating petals in the hero section.
- **Dynamic Background Music:** Features a soothing, aggressively auto-playing background track that syncs elegantly with user micro-activity. The music player includes a floating toggle control.
- **Live Countdown Timer:** A real-time timer tracking the days, hours, and minutes until the wedding ceremony.
- **Wedding Events Schedule:** Beautifully customized event cards with translucent backgrounds for the Arrival of Barat, Wedding Dinner, and Vidai.
- **Captured Moments Gallery:** A sleek, fully-responsive CSS Masonry image gallery populated with high-quality couple photos, featuring hover effects and an integrated JavaScript Lightbox for fullscreen viewing.
- **Interactive Invitation Card:** A majestic digital invitation block that elegantly reflects traditional Indian wedding cards.
    - **Download Image:** Instantly generates a high-quality `.png` of the invitation card specifically using **html2canvas**.
    - **Native Sharing:** Uses the modern **Web Share API**, letting users seamlessly share the invitation directly into WhatsApp, Messages, or Email with a single click.
- **Google Maps Integration:** Direct embedded routing to the wedding venue at R.G. Sumangalam, Hapur.

## 🛠 Technology Stack

This project is built purely with Frontend Web Standards for maximum performance, loading speed, and compatibility without requiring a complex backend setup.
- **HTML5:** Semantic architecture
- **CSS3:** Custom CSS variables for powerful theming (`var(--gold)`), CSS Grid, Flexbox, masking-image, and radial gradients.
- **Vanilla JavaScript:** For interactive DOM manipulation (Lightbox, music toggler, timer, canvas capture).
- [AOS.js](https://michalsnik.github.io/aos/): CSS-driven scroll animations.
- [Particles.js](https://vincentgarreau.com/particles.js/): Lightweight JavaScript particle effect.
- [html2canvas](https://html2canvas.hertzen.com/): Client-side screenshot engine.

## 🚀 Setup & Execution

Since the project is built completely with static files, no build step or node dependencies are mandatory. 

To run locally:
1. Open a terminal in the project directory.
2. Serve the directory using a simple local server to avoid CORS issues for images. For example:
   ```bash
   npx serve -l 3000
   ```
3. Open your browser and navigate to `http://localhost:3000`.

## 📁 Directory Structure

```text
website/
├── index.html        # Main HTML layout, structure, and text content
├── css/
│   └── style.css     # Global styles, variables, components, & responsive breakpoints
├── js/
│   └── script.js     # Event listeners, AOS init, canvas logic, background music
└── assets/           # Project images, music, and custom motifs
    ├── captured_moments/ # Couple's high-res gallery images
    ├── barat_arrival.png
    ├── wedding_dinner.png
    ├── vidai.png 
    ├── ganesha.png
    └── jay_ganesh_deva.mp3
```

## 📝 Configuration

- **Updating the Date:** Open `js/script.js` and modify the `countDownDate` variable line to point to a new date/time.
- **Replacing Imagery:** Drop new photos directly into the `assets/` folder and update `index.html` references if the filenames change.
- **Changing Colors:** In `css/style.css`, modify the `:root` variables (like `--gold`, `--maroon`, or `--green-dark`) to instantly overhaul the entire site's color scheme.

---
*Created by Himanshu for the beautiful union of Reshu and Vikas.*
