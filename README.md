# Simple Note Extension 📝✨

A lightweight and easy-to-use Chrome extension for quickly jotting down notes.  
Your notes are stored locally in your browser and persist across sessions.

## Features 🚀

- Add, view, and delete notes instantly
- Responsive and clean UI
- Notes are saved automatically and persist after refresh
- Keyboard shortcut: Press **Enter** to add a note
- No account required, no data leaves your device

## How to Use 🤓

- Click the extension icon to open the popup.
- Type your note and press **Enter** ⏎ or click the **Add** button ✅.
- Delete notes by clicking the trash icon 🗑️.
- Notes are stored locally and will remain after closing or refreshing the browser.

## Installation 🛠️

### For Chrome/Edge (Unpacked)

1. Clone or download this repository.
2. Build the project (if using React, run `npm install` and `npm run build`).
3. Go to `chrome://extensions/` (or `edge://extensions/`).
4. Enable **Developer mode** (top right).
5. Click **Load unpacked** and select the folder containing `manifest.json`.

## Commands You Can Use 💻

- `npm install` – Install dependencies
- `npm run build` – Build the extension for production
- `npm start` – Run the extension in development mode

## Technologies Used 🧑‍💻

- React
- Tailwind CSS
- [Lucide Icons](https://lucide.dev/)

## Customization 🎨

- To sync notes across devices, you can switch from `localStorage` to `chrome.storage.sync` (see code comments).
- Style and layout can be customized via Tailwind classes in `App.jsx`.

## Contributing 🤝

Pull requests and suggestions are welcome!  
Feel free to fork the repository and submit improvements.

## License 📄

This project is licensed under the MIT License.

---

**Made with ❤️ by Tanmay Gosavi**
