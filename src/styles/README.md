# CSS Architecture

This project uses a modular CSS approach with CSS Modules for component-specific styling and a global CSS file for base styles.

## Structure

- `global.css`: Contains CSS reset, variables, utility classes, and base styling 
- `*.module.css`: Component-specific CSS files that are locally scoped

## Global CSS

The `global.css` file contains:

- CSS Reset
- CSS Variables (colors, spacing, typography, etc.)
- Base element styling (body, headings, links)
- Utility classes (container, spacing helpers)

## CSS Modules

Each component has its own CSS Module file:

```
Component: src/components/Button.tsx
CSS Module: src/styles/Button.module.css
```

CSS Modules are imported into components:

```tsx
import styles from '../styles/Button.module.css';

const Button = () => (
  <button className={styles.button}>Click Me</button>
);
```

## Conventions

1. Use kebab-case for class names in CSS files
2. Use camelCase when referencing styles in components 
3. Organize CSS properties in logical groups
4. Use CSS variables for themeable properties
5. Follow mobile-first approach with media queries

## Benefits

- Locally scoped styles prevent naming conflicts
- Clear separation between global and component styles
- Better organization with styles centralized in `/styles` folder
- No reliance on utility-first frameworks or CSS-in-JS libraries
- Improved maintainability with pure CSS 