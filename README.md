# 💬 Mini Chat

**Mini Chat** is a desktop application designed for learning JavaScript, built using the **Electron** framework. The interface features a cozy pixel-art style utilizing the *Pixelify Sans* font. The application functions as an interactive helper with an extensive built-in knowledge base: you can ask it about fundamental, intermediate, or advanced JavaScript concepts, or simply click on interactive chips to get detailed explanations with code examples.

---

## 🚀 Features

* 🖥️ Responsive, scalable window interface with window constraints (**800×600 px** minimum up to **950×700 px** default).
* 🎨 Unique visual style inspired by Pixel Art with a cozy custom grid background and sidebar navigation.
* ⌨️ Interactive chat with a simulated typewriter effect ("typing" delay) and auto-scroll functionality.
* 📚 Categorized JavaScript Knowledge Base split into three difficulty levels:
  * **Beginner:** `js-intro`, `html-integration`, `console`, `let-const`, `data-types`, `interpolation`, `math-api`, `logical-ops`, `ternary-nullish`, `if-else`.
  * **Intermediate:** `loops-all`, `break-continue`, `nested-loops`, `arrays-init`, `spread-op`, `array-methods`, `string-methods`, `regex-methods`, `functions-closures`, `arrow-fns`.
  * **Advanced:** `iife-recursion`, `hoisting`, `oop-classes`, `private-members`, `getters-setters`, `static-members`, `mvc-pattern`, `try-catch`, `advanced-oop`, `context-this`, `object-cloning`, `object-compare`, `object-utilities`, `object-params`, `constructors`, `instanceof`, `prototypes`, `proto-mechanics`, `call-apply-bind`, `meta-properties`.

---

## 📂 Project Structure

```text
mini-chat/
├── src/
│   ├── assets/
│   │   ├── chat.png          # Main logo and window icon
│   │   └── icon.ico          # Application favicon / executable icon
│   ├── index.html            # Markup structure & chip topic buttons
│   ├── index.css             # Custom pixel-art styling & layout
│   ├── script.js             # Topic database & chat renderer logic
│   ├── preload.js            # Electron security bridge / preload script
│   └── index.js              # Main Electron process (Window lifecycle)
├── forge.config.js           # Electron Forge build & distribution configuration
├── package.json              # Project metadata, dependencies, & build scripts
└── README.md                 # Project documentation