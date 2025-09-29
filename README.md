TP 07 — Introduction to JavaScript

A collection of interactive exercises in plain JavaScript to practice logic, data types, and DOM manipulation. Includes modern HTML + CSS interface and clear, well-structured JS functions.

🧩 Exercises

Ex. 1 – Age Calculator: pick a birth date and get your age.

Ex. 2 – Fruit Search: check availability inside a predefined array.

Ex. 3 – Data & Type Comparison: loose equality == vs strict ===.

Ex. 4 – Object properties: loop through a “city” object with for…in.

Ex. 5 – Array duplication: use Array.map to transform numbers.

Ex. 6A/6B – Star triangles: console patterns (left-aligned & centered).

Ex. 7 – Names with “A”: filter list of names starting with A.

Ex. 8 – Replace words: String.replace with a global RegExp.

Ex. 9 – Cut text: trim string to given number of characters.

Ex. 10 – Join with separator: normalize list and join with “ - ”.

Ex. 11 – Revenue calculator: parse Product:amount pairs and sum totals.

📂 Structure
/ (project root)
├─ index.html          # Main interface with all exercises
├─ style.css           # Glassmorphism + responsive styling
└─ js/
   ├─ ejercicios.js    # Main exercise logic (DOM + functions)
   └─ utils.js         # (optional) helpers, referenced in index.html


Note: utils.js is referenced in HTML. If not used, keep it empty or remove the reference to avoid console warnings.

▶️ How to Run

Clone or download this repo.

Open index.html directly in your browser or use a local server (e.g. Live Server in VS Code).

Play with each block: inputs, buttons, and results update live. Some exercises log outputs in the browser console.

✅ Requirements

Any modern browser (Chrome, Firefox, Edge, Safari).

No dependencies, no build process.

🛠️ Implementation Details

DOM: getElementById, innerHTML, and simple onclick events.

Dates: new Date() + getFullYear() for age calculation.

Arrays: find, map, split, join, trim.

Strings: replace with global regex, substring, charAt, toUpperCase.

Validation: minimal checks + feedback in result containers.

🔍 Suggested Improvements

Fruit Search: normalize case (.toLowerCase()) for safer matches.

Replace words: escape regex meta characters when needed.

Cut text: handle NaN and empty inputs gracefully.

Accessibility: add label tags and aria-live="polite" to results.

Small typo: “Damazco” → “Damasco”.

🧪 Quick Manual Tests

Age: test with past vs future date (future should yield negative).

Fruits: try “manzana”, “Manzana”, and a missing fruit.

Replace: text “hola hola”, search “hola”, replace “bye”.

Revenue: Pizza:15.50, Burger:8.75, Empanada:3 → total 27.25.

📜 License

MIT — free to learn, use, and adapt.
