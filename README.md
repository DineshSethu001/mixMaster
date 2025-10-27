

### 🚀 Steps to Run the Project Locally

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   ```

   Example:

   ```bash
   git clone https://github.com/username/project-name.git
   ```

2. **Go inside the project folder**

   ```bash
   cd project-name
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

   *(If you’re using Yarn or PNPM, run `yarn` or `pnpm install` instead.)*

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open the project in your browser**

   * Check the terminal — you’ll see something like:

     ```
     ➜  Local:   http://localhost:5173/
     ```
   * Open that link in your browser 🎉

6. *(Optional)* **Build for production**

   ```bash
   npm run build
   ```
Here’s an enhanced version of your explanation — it sounds cleaner and more professional while staying easy to read 👇

---

### 🧩 Project Styling & Routing Overview

In this project, I’ve combined multiple modern React libraries to handle layout, styling, animations, and navigation:

* 🎨 **Styled-components** – Used for component-based styling and layout structure. It allows writing actual CSS inside JavaScript and keeping styles scoped to specific components.
* ⚡ **Tailwind CSS** – Used mainly for utility-based styling in certain pages, including the **404 Error Page** for quick and responsive design.
* 🎬 **Framer Motion** – Added smooth and interactive animations, such as floating elements and transitions for the 404 page.
* 🧭 **React Router DOM** – Used for navigation and route management throughout the app, enabling nested routes and dynamic page rendering.

---

### 🛠️ Installation Guide

1. **Clone the project**

   ```bash
   git clone <repo-url>
   cd project-folder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install required packages**

   ```bash
   npm install styled-components framer-motion react-router-dom
   ```

4. *(Optional)* If you’re using **Tailwind CSS**, make sure it’s already set up:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   Then configure your `tailwind.config.js` and import Tailwind in `index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Run the project**

   ```bash
   npm run dev
   ```

6. Open your browser and visit:

   ```
   http://localhost:5173
   ```



