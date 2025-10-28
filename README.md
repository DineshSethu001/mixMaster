Live_Link =>https://mix-master-six.vercel.app/
<img width="1366" height="768" alt="mix" src="https://github.com/user-attachments/assets/6ce5a7e5-30a5-4070-adaf-e4ad9959f570" />


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
   npm install tailwindcss @tailwindcss/vite
   ```

5. **Configure the Vite plugin**
   Add the `@tailwindcss/vite` plugin to your Vite configuration.

   ```js
   import { defineConfig } from 'vite'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [
       tailwindcss(),
     ],
   })
   ```

6. **Import Tailwind CSS**
   Add an `@import` to your CSS file that imports Tailwind CSS.

   ```css
   @import "tailwindcss";
   ```

7. **Run the project**

   ```bash
   npm run dev
   ```

8. **Open your browser and visit**

   ```
   http://localhost:5173
   ```
