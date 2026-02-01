# Contributing to Web Product Template

First off, thank you for considering contributing to Web Product Template! It's people like you that make this project better for everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Branch Model](#branch-model)
- [Pull Request Process](#pull-request-process)
- [Testing Requirements](#testing-requirements)
- [Review Process](#review-process)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [issue tracker](https://github.com/jea022/NoName/issues) to avoid duplicates.

When you create a bug report, please include as many details as possible:
- Use the bug report template
- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples and screenshots if applicable
- Describe the behavior you observed and what you expected
- Include your environment details (OS, Node version, browser)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:
- Use the feature request template
- Provide a clear and descriptive title
- Explain why this enhancement would be useful
- List any similar features in other projects if applicable

### Your First Code Contribution

Unsure where to begin? You can start by looking through issues labeled:
- `good-first-issue` - Issues suitable for beginners
- `help-wanted` - Issues that need attention

### Pull Requests

- Fill in the pull request template
- Follow the coding standards
- Include appropriate test coverage
- Update documentation as needed
- Add an entry to CHANGELOG.md

## 🛠️ Development Setup

### Prerequisites

- Node.js v16+ (v18+ recommended)
- npm v8+ or equivalent (yarn/pnpm)
- Git

### Setup Steps

1. **Fork the repository** on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/NoName.git
   cd NoName
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/jea022/NoName.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

### Development Workflow

```bash
# Make your changes
# Test your changes locally
npm run dev

# Build to check for errors
npm run build

# Run tests (when implemented)
npm test

# Commit your changes (see commit guidelines)
git add .
git commit -m "feat: add amazing feature"

# Push to your fork
git push origin feature/your-feature-name

# Open a Pull Request on GitHub
```

## 💻 Coding Standards

### JavaScript/JSX Style Guide

We follow standard JavaScript best practices with some project-specific conventions:

#### General Guidelines

- Use **functional components** with hooks (no class components)
- Prefer **const** over let, avoid var
- Use **arrow functions** for callbacks and inline functions
- Use **template literals** for string interpolation
- Use **destructuring** for props and objects
- Add **PropTypes** or use TypeScript for type safety (when applicable)

#### Code Example

```jsx
// ✅ Good
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function MyComponent({ title, items }) {
  const [isActive, setIsActive] = useState(false)
  
  useEffect(() => {
    // Effect logic here
  }, [])
  
  const handleClick = () => {
    setIsActive(!isActive)
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClick}
    >
      <h2>{title}</h2>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </motion.div>
  )
}

// ❌ Bad
import React from 'react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }
  }
  
  render() {
    var title = this.props.title
    return (
      <div onClick={() => this.setState({ isActive: !this.state.isActive })}>
        <h2>{title}</h2>
      </div>
    )
  }
}
```

### File Naming Conventions

- **Components**: PascalCase - `MyComponent.jsx`
- **Utilities**: camelCase - `myUtility.js`
- **Styles**: kebab-case - `my-component.css`
- **Tests**: Match source file with `.test.js` suffix - `MyComponent.test.jsx`

### Import Order

Organize imports in the following order:

```jsx
// 1. React imports
import { useState, useEffect } from 'react'

// 2. Third-party libraries
import { motion } from 'framer-motion'
import { cn } from 'class-variance-authority'

// 3. Internal modules (absolute imports)
import { MyComponent } from '@/components/MyComponent'
import { useMyHook } from '@/hooks/useMyHook'

// 4. Relative imports
import { helper } from './utils/helper'
import styles from './MyComponent.module.css'

// 5. Assets
import logo from './assets/logo.svg'
```

### CSS Guidelines

- Use **CSS variables** for theming
- Follow **BEM methodology** for class naming (or CSS modules)
- Keep selectors **flat** (avoid deep nesting)
- Use **mobile-first** approach for responsive design
- Prefer **flexbox/grid** over floats

```css
/* ✅ Good */
:root {
  --color-primary: #007bff;
  --spacing-unit: 8px;
}

.button {
  background: var(--color-primary);
  padding: calc(var(--spacing-unit) * 2);
}

.button--large {
  padding: calc(var(--spacing-unit) * 3);
}

.button__icon {
  margin-right: var(--spacing-unit);
}
```

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvement
- **test**: Adding or updating tests
- **chore**: Changes to build process, tooling, dependencies, etc.
- **ci**: Changes to CI configuration files and scripts

### Examples

```bash
# Feature
git commit -m "feat(hero): add animated background particles"

# Bug fix
git commit -m "fix(navigation): resolve mobile menu not closing on route change"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Breaking change
git commit -m "feat(api): change component prop interface

BREAKING CHANGE: The `variant` prop now accepts 'primary' | 'secondary' instead of strings"
```

### Commit Best Practices

- Use the imperative mood ("add feature" not "added feature")
- Keep the subject line under 72 characters
- Capitalize the subject line
- Don't end the subject line with a period
- Separate subject from body with a blank line
- Wrap the body at 72 characters
- Use the body to explain *what* and *why* vs. *how*

## 🌿 Branch Model

We use a simplified Git Flow model:

### Branch Types

- **main** - Production-ready code
- **develop** - Integration branch (if used)
- **feature/** - New features (`feature/add-dark-mode`)
- **fix/** - Bug fixes (`fix/navigation-bug`)
- **docs/** - Documentation updates (`docs/update-readme`)
- **refactor/** - Code refactoring (`refactor/simplify-state`)
- **chore/** - Maintenance tasks (`chore/update-dependencies`)

### Branch Naming

```bash
# Format: type/short-description-in-kebab-case

feature/add-dark-mode-toggle
fix/mobile-menu-overflow
docs/api-reference
refactor/extract-particle-system
chore/upgrade-dependencies
```

### Working with Branches

```bash
# Create a new branch from main
git checkout main
git pull upstream main
git checkout -b feature/my-new-feature

# Keep your branch up to date
git fetch upstream
git rebase upstream/main

# Or merge if preferred
git merge upstream/main
```

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review of your code completed
- [ ] Comments added for complex logic
- [ ] Documentation updated (if needed)
- [ ] Tests added/updated (if applicable)
- [ ] No new warnings or errors introduced
- [ ] CHANGELOG.md updated with your changes

### PR Checklist Template

When you open a PR, include this checklist:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Refactoring (no functional changes)
- [ ] Performance improvement

## Testing
- [ ] I have tested these changes locally
- [ ] I have added tests that prove my fix/feature works
- [ ] Existing tests pass locally
- [ ] I have tested on different browsers (if UI changes)
- [ ] I have tested responsive behavior (if UI changes)

## Documentation
- [ ] I have updated the README (if needed)
- [ ] I have updated the docs/ (if needed)
- [ ] I have added/updated JSDoc comments
- [ ] I have updated CHANGELOG.md

## Screenshots (if applicable)
Add screenshots for UI changes

## Related Issues
Fixes #(issue number)
Related to #(issue number)

## Additional Notes
Any additional information for reviewers
```

### Submitting a PR

1. **Push your changes** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub
   - Use a clear title describing the change
   - Fill out the PR template completely
   - Link related issues
   - Add screenshots for UI changes

3. **Respond to feedback** from reviewers
   - Make requested changes
   - Push additional commits to the same branch
   - Re-request review when ready

4. **Squash commits** (if requested)
   ```bash
   git rebase -i HEAD~n  # where n is the number of commits
   ```

## 🧪 Testing Requirements

<!-- TODO: Update when test framework is implemented -->

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- MyComponent.test.jsx
```

### Writing Tests

- Write tests for all new features
- Update tests when modifying existing features
- Aim for at least 80% code coverage
- Test edge cases and error conditions
- Use descriptive test names

Example test structure:

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { MyComponent } from './MyComponent'

describe('MyComponent', () => {
  it('renders with default props', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
  
  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<MyComponent onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

## 👀 Review Process

### What Reviewers Look For

- **Correctness**: Does the code do what it's supposed to?
- **Code Quality**: Is the code clean, readable, and maintainable?
- **Tests**: Are there adequate tests?
- **Documentation**: Is the code well-documented?
- **Performance**: Are there any performance concerns?
- **Security**: Are there any security issues?

### Response Time

- We aim to provide initial feedback within 2-3 business days
- Complex PRs may take longer to review
- Ping maintainers if you haven't heard back in a week

### Merging

- PRs require at least 1 approval from a maintainer
- All CI checks must pass
- No unresolved conversations
- Branch must be up to date with main

## 🎯 What to Contribute

### High Priority

- Bug fixes for reported issues
- Performance improvements
- Accessibility enhancements
- Test coverage improvements
- Documentation improvements

### Welcome Contributions

- New features (discuss first in an issue)
- UI/UX improvements
- Code refactoring
- Example additions
- Internationalization (i18n)

### Please Discuss First

- Major architectural changes
- Breaking changes
- New dependencies
- Large feature additions

## 📞 Getting Help

- **Questions**: Open a [GitHub Discussion](https://github.com/jea022/NoName/discussions)
- **Bugs**: Open an [Issue](https://github.com/jea022/NoName/issues)
- **Chat**: <!-- TODO: Add Discord/Slack link if available -->

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (see [LICENSE](LICENSE) file).

---

Thank you for contributing! 🎉
