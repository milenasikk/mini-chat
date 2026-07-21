# 💬 Mini Chat

**Mini Chat** is a compact desktop application designed for learning JavaScript, built using the **Electron** framework. The interface features a cozy pixel-art style utilizing the *Pixelify Sans* font. The application functions as an interactive helper: you can ask it about fundamental JavaScript concepts, and it will explain the topic in detail with code examples.

---

## 🚀 Features
* 🖥️ Fixed, adaptive interface tailored perfectly for an **800×600 px** window size.
* 🎨 Unique visual style inspired by Pixel Art[cite: 1, 2].
* ⌨️ Interactive chat with smooth message appearance animations and a simulated "typing" response effect.
* 📚 Built-in support for breakdown topics: `variables`, `functions`, `loops`, `objects` and so on.

---

## 📂 Project Structure

```text
mini-chat/
├── src/
│   ├── assets/
│   │   ├── chat.png          # Interface and application window icon
│   │   └── icon.ico          # Favicon icon
│   ├── index.html            # Interface layout
│   ├── index.css             # Interface styles (clean setup)
│   ├── script.js             # Chat logic (Renderer process)
│   ├── preload.js            # Electron preload script
│   └── index.js              # Main Electron process (Main process)
├── forge.config.js           # Electron Forge bundler configuration
├── package.json              # Dependencies and start scripts
└── README.md                 # Project documentation
