# JS Framework-sim

A lightweight JavaScript framework simulation built for **learning and experimentation** with component-based architecture, DOM manipulation, and modular front-end design.  
This project is **not a production-ready framework** — it’s meant to help me understand how JavaScript frameworks like React, Vue, or Svelte handle components, rendering, and data flow.

---

## 📘 Project Overview

The goal of this project is to simulate a simplified JavaScript framework by implementing:

- Component-based structure (`components/` folder)
- Basic rendering logic (`main.js`, `app.js`)
- Utility helpers for DOM and event handling (`utils.js`)
- Modular and reusable CSS structure (`default-styles.css`)
- Example HTML structure (`index.html`)

You can think of **Framework-sim** as a sandbox where you can experiment with framework concepts without relying on external libraries.

---

## 🗂️ Project Structure

```
Framework-sim/
│
├── JS-ramework-sim/
│   ├── index.html              # Entry point for the web app
│   ├── default-styles.css      # Base styling for components
│   ├── app.js                  # Application root and initialization
│   ├── index.js                # Handles framework bootstrapping
│   ├── main.js                 # Example implementation or demo script
│   ├── utils.js                # Helper and DOM utility functions
│   │
│   ├── components/             # Individual reusable UI components
│   │   ├── buttons.js
│   │   ├── footer.js
│   │   ├── forms.js
│   │   ├── grids.js
│   │   ├── header.js
│   │   ├── hero.js
│   │   ├── image.js
│   │   └── texts.js
│   │
│   ├── images/                 # Example assets
│   │   ├── cotton-socks.png
│   │   ├── placeholder.jpg
│   │   ├── placeholder.png
│   │   └── plain-t-shirt.png
│   │
│   └── documentation.md        # Notes and extra explanations
│
└── README.md                   # (this file)
```

---

## ⚙️ How to Run

1. **Clone or extract the project**

   ```bash
   git clone https://github.com/marr-fee/framework-sim.git
   cd JS-framework-sim/JS-framework-sim
   ```

2. **Open the project in your browser**
   - Double-click `index.html`, or
   - Serve it locally with a simple server:
     ```bash
     npx serve
     ```

---

## 🧩 Learning Goals

This project helps you practice:

- JavaScript **modules** and ES6+ syntax
- DOM manipulation without libraries
- Building **component-based architectures**
- Applying **separation of concerns** (JS, CSS, HTML)
- Experimenting with simple reactivity and UI updates

---

## 🧑‍💻 Contributing

Since this is a learning project, feel free to fork, modify, and experiment!  
You can document your experiments in `documentation.md`.

---

## ⚠️ Disclaimer

> This project is for **educational purposes only**.  
> It’s not intended for production use, performance testing, or deployment.  
> The goal is to understand _how frameworks work under the hood_.

---

## 📄 License

MIT License © 2025  
You are free to use, modify, and distribute this project for learning and non-commercial purposes.
