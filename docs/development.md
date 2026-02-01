# 🛠️ Development Guide

This guide covers everything you need to know to contribute to and develop the Web Product Template project.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Code Style](#code-style)
- [Testing](#testing)
- [Linting](#linting)
- [Debugging](#debugging)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

### Required Tools

- **Node.js**: v16.x or higher (v18.x recommended)
  - Download: https://nodejs.org/
  - Check version: `node --version`

- **npm**: v8.x or higher (comes with Node.js)
  - Check version: `npm --version`
  - Alternative: yarn or pnpm

- **Git**: Latest version
  - Download: https://git-scm.com/
  - Check version: `git --version`

### Recommended Tools

- **Code Editor**: VS Code (with extensions)
  - ESLint extension
  - Prettier extension
  - ES7+ React/Redux/React-Native snippets
  - Path Intellisense

- **Browser**: Chrome/Firefox with DevTools
  - React Developer Tools extension
  - Redux DevTools extension (if using Redux)

- **Terminal**: Modern terminal with good Git support
  - Windows: Windows Terminal or Git Bash
  - macOS: iTerm2 or built-in Terminal
  - Linux: Any modern terminal

### Verify Prerequisites

Run these commands to verify your setup:

```bash
# Check Node.js
node --version
# Expected: v16.x.x or higher

# Check npm
npm --version
# Expected: 8.x.x or higher

# Check Git
git --version
# Expected: 2.x.x or higher
```

## 🚀 Initial Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub first, then:

# Clone your fork
git clone https://github.com/YOUR-USERNAME/NoName.git
cd NoName

# Add upstream remote
git remote add upstream https://github.com/jea022/NoName.git

# Verify remotes
git remote -v
```

### 2. Install Dependencies

```bash
# Install all dependencies
npm install

# This will install:
# - React and React DOM
# - Vite and plugins
# - Framer Motion
# - Recharts
# - Other dependencies
```

### 3. Environment Setup

Create a `.env` file for local configuration:

```bash
# Copy the example file (if it exists)
cp .env.example .env

# Or create a new one
touch .env
```

Add your environment variables:

```env
# .env
# Development environment variables

# API endpoints (if applicable)
VITE_API_URL=http://localhost:3000

# Analytics (optional)
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Feature flags (optional)
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
```

**Important**: Never commit `.env` files. They're in `.gitignore` by default.

### 4. Verify Setup

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
# You should see the landing page
```

## 💼 Development Workflow

### Daily Workflow

```bash
# 1. Start your day - update your local repository
git checkout main
git pull upstream main

# 2. Create a new feature branch
git checkout -b feature/your-feature-name

# 3. Start development server
npm run dev

# 4. Make your changes
# Edit files, save, and see changes automatically in browser

# 5. Test your changes
npm run build  # Make sure it builds
# TODO: npm test  # Run tests when implemented

# 6. Commit your changes
git add .
git commit -m "feat: add new feature"

# 7. Push to your fork
git push origin feature/your-feature-name

# 8. Open a Pull Request on GitHub
```

### Branch Strategy

We use a simple branching model:

- `main` - Production-ready code
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates
- `refactor/*` - Code refactoring
- `chore/*` - Maintenance tasks

```bash
# Examples
git checkout -b feature/add-dark-mode
git checkout -b fix/navigation-bug
git checkout -b docs/update-readme
git checkout -b refactor/simplify-state
git checkout -b chore/update-deps
```

## 📂 Project Structure

### Important Directories

```
src/
├── assets/           # Static assets
├── components/       # React components
│   ├── common/       # Reusable components
│   ├── layout/       # Layout components
│   └── sections/     # Page sections
├── pages/            # Page components
├── scripts/          # Utilities and helpers
├── styles/           # Global styles
│   ├── base/         # Base styles
│   ├── components/   # Component styles
│   └── utilities/    # Utility classes
└── main.jsx          # App entry point
```

### Key Files

- **`index.html`**: HTML entry point
- **`src/main.jsx`**: JavaScript entry point
- **`vite.config.js`**: Build configuration
- **`package.json`**: Dependencies and scripts
- **`.gitignore`**: Files to ignore in Git

## 📜 Available Scripts

### Development

```bash
# Start dev server (with HMR)
npm run dev

# Specify a different port
npm run dev -- --port 3000

# Open in browser automatically
npm run dev -- --open
```

### Building

```bash
# Create production build
npm run build

# Preview production build
npm run preview

# Build with detailed output
npm run build -- --debug
```

### Testing

<!-- TODO: Update when tests are implemented -->

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage

# Run specific test file
npm test MyComponent.test.jsx
```

### Linting

<!-- TODO: Update when linters are configured -->

```bash
# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Check specific files
npm run lint src/components/**/*.jsx
```

### Formatting

<!-- TODO: Update when Prettier is configured -->

```bash
# Format code with Prettier
npm run format

# Check formatting without changing files
npm run format:check
```

### Maintenance

```bash
# Check for outdated dependencies
npm outdated

# Update dependencies
npm update

# Audit for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## 🎨 Code Style

### JavaScript/JSX Style

#### Import Order

```jsx
// 1. React
import { useState, useEffect } from 'react'

// 2. External libraries
import { motion } from 'framer-motion'

// 3. Internal components
import { Button } from '@/components/Button'

// 4. Utilities
import { cn } from '@/utils/classnames'

// 5. Styles
import './MyComponent.css'

// 6. Assets
import logo from './logo.svg'
```

#### Component Structure

```jsx
// Imports
import { useState } from 'react'
import './MyComponent.css'

// Component definition
export function MyComponent({ title, items, onAction }) {
  // Hooks
  const [isActive, setIsActive] = useState(false)
  
  // Event handlers
  const handleClick = () => {
    setIsActive(!isActive)
    onAction?.()
  }
  
  // Render helpers
  const renderItems = () => {
    return items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))
  }
  
  // Return JSX
  return (
    <div className="my-component">
      <h2>{title}</h2>
      <ul>{renderItems()}</ul>
      <button onClick={handleClick}>
        {isActive ? 'Active' : 'Inactive'}
      </button>
    </div>
  )
}
```

#### Naming Conventions

```javascript
// Components: PascalCase
MyComponent, UserProfile, NavBar

// Functions: camelCase
handleClick, fetchData, calculateTotal

// Constants: SCREAMING_SNAKE_CASE
API_URL, MAX_RETRY_COUNT

// Files:
// - Components: PascalCase (Button.jsx)
// - Utilities: camelCase (formatDate.js)
// - Styles: kebab-case (my-component.css)
```

### CSS Style

```css
/* Use CSS variables */
.button {
  background: var(--color-primary);
  padding: var(--spacing-md);
}

/* BEM naming */
.card { }
.card__title { }
.card__content { }
.card--featured { }

/* Mobile-first responsive */
.element {
  width: 100%;  /* Mobile */
}

@media (min-width: 768px) {
  .element {
    width: 50%;  /* Tablet+ */
  }
}
```

## 🧪 Testing

<!-- TODO: Expand when testing is implemented -->

### Writing Tests

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { MyComponent } from './MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
  
  it('handles clicks', () => {
    const handleClick = jest.fn()
    render(<MyComponent onClick={handleClick} />)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Running Tests

```bash
# Run all tests
npm test

# Watch mode (recommended during development)
npm test -- --watch

# Coverage report
npm test -- --coverage

# Specific test
npm test MyComponent
```

## 🔍 Linting

<!-- TODO: Setup ESLint configuration -->

### ESLint Setup

Create `.eslintrc.js`:

```javascript
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Custom rules
    'react/prop-types': 'off',
    'no-unused-vars': 'warn'
  }
}
```

### Running Linter

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix

# Check specific files
npx eslint src/components/**/*.jsx
```

## 🐛 Debugging

### Browser DevTools

```javascript
// Use debugger statement
function myFunction() {
  debugger  // Execution will pause here
  // ... rest of code
}

// Console logging
console.log('Value:', value)
console.table(arrayOfObjects)
console.error('Error:', error)
```

### React DevTools

1. Install React DevTools browser extension
2. Open DevTools → React tab
3. Inspect component props and state
4. Profile component performance

### Vite Dev Server

The dev server provides:
- Hot Module Replacement (HMR)
- Clear error overlays
- Source maps for debugging

## 🔨 Common Tasks

### Adding a New Component

```bash
# 1. Create component directory
mkdir src/components/MyComponent

# 2. Create component file
cat > src/components/MyComponent/MyComponent.jsx << 'EOF'
export function MyComponent() {
  return <div>My Component</div>
}
EOF

# 3. Create style file
touch src/components/MyComponent/MyComponent.css

# 4. Create index file for easy imports
cat > src/components/MyComponent/index.js << 'EOF'
export { MyComponent } from './MyComponent'
EOF

# 5. Use in your app
# import { MyComponent } from '@/components/MyComponent'
```

### Adding a New Dependency

```bash
# Install a new package
npm install package-name

# Install a dev dependency
npm install -D package-name

# Always check for vulnerabilities after installing
npm audit
```

### Updating Dependencies

```bash
# Check what's outdated
npm outdated

# Update specific package
npm update package-name

# Update all packages (careful with major versions)
npm update

# Update to latest (including major versions)
npx npm-check-updates -u
npm install
```

### Environment-Specific Config

```javascript
// Check environment
if (import.meta.env.DEV) {
  console.log('Development mode')
}

if (import.meta.env.PROD) {
  console.log('Production mode')
}

// Access env variables
const apiUrl = import.meta.env.VITE_API_URL
```

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Error: Port 5173 is already in use

# Solution 1: Use different port
npm run dev -- --port 3000

# Solution 2: Kill process using the port (Unix/Mac)
lsof -ti:5173 | xargs kill -9

# Solution 2: Kill process (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Module Not Found

```bash
# Error: Cannot find module 'xyz'

# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Cache Issues

```bash
# Clear npm cache
npm cache clean --force

# Clear Vite cache
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

### Build Errors

```bash
# Check for syntax errors
npm run lint

# Clean build directory
rm -rf dist

# Rebuild
npm run build

# Check build output
npm run preview
```

### Git Issues

```bash
# Discard local changes
git checkout -- <file>

# Undo last commit (keep changes)
git reset HEAD~1

# Update your branch with main
git fetch upstream
git rebase upstream/main

# Resolve conflicts
# Edit conflicted files, then:
git add .
git rebase --continue
```

## 📚 Additional Resources

### Documentation

- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Learning Resources

- [React Tutorial](https://react.dev/learn)
- [Modern JavaScript](https://javascript.info/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

### Community

- [React Discord](https://discord.gg/react)
- [Vite Discord](https://chat.vitejs.dev/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)

## 🤝 Getting Help

If you're stuck:

1. Check this documentation
2. Search [existing issues](https://github.com/jea022/NoName/issues)
3. Ask in [GitHub Discussions](https://github.com/jea022/NoName/discussions)
4. Open a new issue with details

---

**Happy coding!** 🚀

For more information, see:
- [Architecture Guide](./architecture.md)
- [Contributing Guide](../CONTRIBUTING.md)
- [Main Documentation](./README.md)
