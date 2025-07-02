✅ Step 1: Project Setup
Create a folder (main folder) to store the entire project.

Start the project using Vite:

bash
Copy
Edit
npm create @vite frontend
Name the project as frontend — this will hold all your frontend code.

Install the styling library Tailwind CSS.

Start the project with:

bash
Copy
Edit
npm run dev
Clean up:

Remove unnecessary files, images, and boilerplate code.

Keep only what you need for a fresh start.

Print a simple message in App.jsx:

js
Copy
Edit
console.log("Hello World");
And display "Hello World" on the screen.

✅ Step 2: Setup Icon & Routing Libraries
Install icon library (e.g. React Icons):

bash
Copy
Edit
npm install react-icons
Install routing library:

bash
Copy
Edit
npm install react-router-dom
Setup the router inside your main component (App.jsx).

✅ Step 3: Create Basic Layout
Build Header and Footer components.

Create a folder named components to store all your reusable components.

✨ Rule: One component per file always.

📌 What is a Component?
A component is a function that accepts the props object and returns JSX.
It helps us break down the UI into reusable pieces.

📌 What is State?
When we talk about data that changes over time, we’re talking about state.

📌 Example:
If a menu-bar can open or close — this is a state (it changes).
We need a variable to store this change — that’s where useState comes in.

💠 useState Hook
The React useState Hook allows us to track state in a function component.

🧩 What does useState do?
Keeps track of data that might change (e.g. form values, visibility toggles).

It returns two things:

The current state.

A function to update that state.

🧪 Example:
js
Copy
Edit
const [color, setColor] = useState('red');
color is the current state.

setColor is the function to update it.

📌 These names can be anything — but use meaningful names.

🔁 Updating State
To change state, just call the setter function:

jsx
Copy
Edit
<button onClick={() => setColor("blue")}>Blue</button>
When the button is clicked, the state updates from "red" to "blue".

🧳 What Can State Hold?
Strings

Numbers

Booleans

Arrays

Objects

And combinations of the above!

📌 You can use multiple useState hooks to track different pieces of state.

🛠️ Updating Objects and Arrays in React State
❌ Problem:
In React, when you update an object using setState, it replaces the whole object.

Example:
If you do setCar({ color: "blue" }),
you lose other properties like brand, model, and year.

✅ Solution: Use Spread Operator (...)
To only change one part of the object (like color),
copy the old state and override the value you want to change:

js
Copy
Edit
setCar(prevState => {
  return { ...prevState, color: "blue" };
});
...prevState copies the old object.

Then color: "blue" replaces just the color.

🧠 Why use a function inside setState?
React may batch multiple state updates.
Using a function gives you the latest state value, ensuring accuracy:

js
Copy
Edit
setState(prev => { ... });
📌 Final Touch
✅ Build your Footer and add it into the main App component layout.