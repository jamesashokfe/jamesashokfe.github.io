# ⚡️ Frontend Engineering Standard

**Goal:** Create a highly aesthetic, high-performance, and mobile-first website adhering to the best possible modern standards.

---

## 🚀 Core Technology Version & Performance Rules

| Technology | Latest Stable Version | Best Practice Rule |
| :--- | :--- | :--- |
| **React** | 19.2.0 | Utilize **React 19's features** like **React Compiler** (automatic memoization) and **Cache Components** for instant navigation and minimal re-renders, ensuring maximum component-level performance. |
| **Next.js** | 16.0.0 | Leverage the **App Router** paradigm with **Server Components** by default for optimal performance, efficient data fetching, and minimal client-side JavaScript. Use **Turbopack** for the fastest possible build times. |
| **TypeScript** | 5.9 | Enforce **strict mode** (`strict: true`) and use advanced type features (like utility types and conditional types) to guarantee maximum code safety, maintainability, and predictable runtime behavior. |
| **JavaScript (ECMAScript)** | ES2024 | Write modern, clean code utilizing **ES2024+ features** (e.g., top-level await, new Array/String methods) while maintaining target-environment compatibility via build tools. Prioritize native JS APIs over heavy libraries when possible. |
| **React MUI** | 7.3.4 | Employ MUI's **advanced theming capabilities** for aesthetic consistency and utilize the **`sx` prop** for dynamic, type-safe custom styling and a direct path to the modern CSS engine. Minimize reliance on the older JSS system. |
| **Tailwind CSS** | 4.1.16 | Configure Tailwind 4.x for **PostCSS/Vite integration** with the **new high-performance engine**. Use utility-first classes exclusively, augmented by custom CSS variables or `@layer` for complex designs, and ensure all components are styled to be **mobile-first** by defaulting to small-screen utilities. |

---

## ✨ Design & Experience Rules (Aesthetic, Performance, Mobile-First)

* **Aesthetic & UX:** All UI must adhere to a **clean, minimalist aesthetic** with high information hierarchy. Implement **smooth transitions** and subtle animations using CSS/Framer Motion, ensuring an "expensive" feel without sacrificing speed.
* **Mobile-First Development:** The entire layout must be designed and coded starting with the smallest viewport. Use a **progressive enhancement** strategy, employing Tailwind's responsive prefixes (e.g., `sm:`, `md:`) to scale up the design for larger screens.
* **Lighthouse Score:** Target a minimum **Lighthouse score of 95+** across all key metrics (Performance, Accessibility, Best Practices, SEO) for every major page on both desktop and mobile.
* **Accessibility (A11Y):** Every component must comply with **WCAG 2.1 AA standards**. Enforce **proper ARIA attributes** and semantic HTML in all React/MUI components.
* **Code Quality:** Mandate **clean architecture**, clear separation of concerns (e.g., components, hooks, services), and mandatory use of ESLint/Prettier to enforce the selected coding style and structural consistency.

---

## Use the mui-mcp server to answer any MUI questions --

- 1. call the "useMuiDocs" tool to fetch the docs of the package relevant in the question
- 2. call the "fetchDocs" tool to fetch any additional docs if needed using ONLY the URLs present in the returned content.
- 3. repeat steps 1-2 until you have fetched all relevant docs for the given question
- 4. use the fetched content to answer the question
