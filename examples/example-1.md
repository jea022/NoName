# Example 1: Basic Setup and Customization

## 📋 Overview

This example walks you through setting up the Web Product Template and making your first customizations. You'll learn how to:
- Install and run the project
- Customize colors and theme
- Modify the hero section
- Add your own branding
- Build for production

**Difficulty**: Beginner  
**Time Required**: 15-20 minutes  
**Prerequisites**: Basic knowledge of HTML, CSS, and JavaScript

---

## ✅ Prerequisites

Before starting, ensure you have:

- Node.js v16+ installed ([download](https://nodejs.org/))
- npm v8+ or yarn
- A code editor (VS Code recommended)
- Git installed
- Basic familiarity with command line

### Verify Prerequisites

```bash
# Check Node.js version
node --version  # Should show v16.x.x or higher

# Check npm version
npm --version   # Should show 8.x.x or higher

# Check Git
git --version
```

---

## 🎯 What You'll Learn

By the end of this example, you'll know how to:

1. Clone and set up the project locally
2. Run the development server
3. Customize the color theme
4. Modify hero section text and buttons
5. Add your own logo
6. Build and preview production version

---

## 📝 Steps

### Step 1: Clone and Install

First, let's get the project on your machine.

```bash
# Clone the repository
git clone https://github.com/jea022/NoName.git

# Navigate to the project directory
cd NoName

# Install dependencies
npm install
```

**Expected output**: You should see npm downloading and installing all required packages. This may take 1-2 minutes.

### Step 2: Start Development Server

Start the local development server:

```bash
npm run dev
```

**Expected output**:
```
VITE v5.0.0  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open your browser and navigate to `http://localhost:5173`. You should see the landing page with:
- A hero section with title and subtitle
- Interactive particle background
- Navigation menu
- Portfolio/features sections

**Tip**: Keep this terminal window open. The dev server will auto-reload when you make changes.

### Step 3: Customize Colors

Now let's personalize the color scheme.

**3.1** Open the CSS variables file:
```bash
# Open in your editor
code src/styles/base/variables.css
# or
open src/styles/base/variables.css
```

**3.2** Find and modify the color variables:

```css
/* src/styles/base/variables.css */
:root {
  /* Original colors */
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-accent: #28a745;
  
  /* Change to your brand colors */
  --color-primary: #FF6B6B;      /* Coral red */
  --color-secondary: #4ECDC4;    /* Turquoise */
  --color-accent: #FFE66D;       /* Yellow */
  
  /* Background colors */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
}
```

**3.3** Save the file and check your browser. The colors should update automatically!

### Step 4: Customize Hero Section

Let's personalize the hero section with your own text.

**4.1** Locate the hero component (location may vary):
```bash
# Search for hero-related files
find src/components -name "*ero*" -o -name "*Hero*" 2>/dev/null || echo "Check main.jsx or index.html"
```

**4.2** Edit the hero content. If using inline HTML:

```html
<!-- index.html or similar -->
<section class="hero">
  <h1 class="hero__title">
    <!-- Change this to your title -->
    Welcome to My Awesome Project
  </h1>
  <p class="hero__subtitle">
    <!-- Change this to your subtitle -->
    Building the future of web development, one pixel at a time
  </p>
  <button class="hero__cta">
    <!-- Change button text -->
    Get Started Now
  </button>
</section>
```

If using React components:

```jsx
// src/components/Hero.jsx or similar
export function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">
        Welcome to My Awesome Project
      </h1>
      <p className="hero__subtitle">
        Building the future of web development, one pixel at a time
      </p>
      <button className="hero__cta">
        Get Started Now
      </button>
    </section>
  )
}
```

**4.3** Save and check your browser. Your custom text should appear!

### Step 5: Add Your Logo

**5.1** Prepare your logo:
- Format: SVG (recommended) or PNG
- Size: Recommended 200x60px or similar
- File name: `logo.svg` or `logo.png`

**5.2** Add logo to public directory:
```bash
# Copy your logo to the public folder
cp /path/to/your/logo.svg public/logo.svg
```

**5.3** Update the navigation/header to use your logo:

```html
<!-- In your HTML or component -->
<header class="header">
  <nav class="nav">
    <a href="/" class="nav__logo">
      <img src="/logo.svg" alt="My Company" width="150" height="50" />
    </a>
    <!-- ... rest of navigation -->
  </nav>
</header>
```

Or in React:

```jsx
// src/components/Navigation.jsx
export function Navigation() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="nav__logo">
          <img src="/logo.svg" alt="My Company" width="150" height="50" />
        </a>
        {/* ... rest of navigation */}
      </nav>
    </header>
  )
}
```

### Step 6: Customize Particle Settings (Optional)

Want to adjust the particle background?

**6.1** Find the particle configuration:
```bash
# Look for particle-related files
grep -r "particle" src/ --include="*.js" --include="*.jsx" -l
```

**6.2** Adjust particle settings:

```javascript
// Example particle configuration
const particleConfig = {
  count: 100,          // Number of particles (try 50-200)
  speed: 0.5,          // Movement speed (0.1-2.0)
  color: '#ffffff',    // Particle color
  size: 2,             // Particle size in pixels
  // Adjust based on your theme
}
```

### Step 7: Build for Production

Once you're happy with your changes, create a production build.

**7.1** Build the project:
```bash
npm run build
```

**Expected output**:
```
vite v5.0.0 building for production...
✓ X modules transformed.
dist/index.html                   2.5 kB
dist/assets/index-abc123.js       150.2 kB │ gzip: 48.1 kB
dist/assets/index-def456.css      12.3 kB │ gzip: 3.2 kB
✓ built in 2.50s
```

**7.2** Preview the production build:
```bash
npm run preview
```

**7.3** Open `http://localhost:4173` to see your production build.

---

## 🎨 Complete Customization Example

Here's a complete example of customizing theme colors:

```css
/* src/styles/base/variables.css */
:root {
  /* Brand Colors */
  --color-primary: #FF6B6B;      /* Coral red */
  --color-secondary: #4ECDC4;    /* Turquoise */
  --color-accent: #FFE66D;       /* Yellow */
  --color-success: #51CF66;      /* Green */
  --color-error: #FF6B6B;        /* Red */
  
  /* Background */
  --bg-primary: #1a1a1a;         /* Dark background */
  --bg-secondary: #2d2d2d;       /* Lighter dark */
  --bg-tertiary: #3a3a3a;        /* Even lighter */
  
  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --text-muted: #808080;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 4rem;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}
```

---

## ✅ Expected Result

After completing all steps, you should have:

1. ✅ A running development server
2. ✅ Custom brand colors applied throughout the site
3. ✅ Personalized hero section with your text
4. ✅ Your logo displayed in the navigation
5. ✅ A production build ready to deploy

### Visual Checklist

Open your browser at `http://localhost:5173` and verify:
- [ ] Custom colors are visible throughout the page
- [ ] Hero section shows your custom title and subtitle
- [ ] Your logo appears in the navigation
- [ ] Particles are working (if enabled)
- [ ] All sections are responsive on mobile (resize browser window)
- [ ] Animations are smooth

---

## 🔧 Troubleshooting

### Issue: Dev server won't start

**Error**: `Port 5173 already in use`

**Solution**:
```bash
# Use a different port
npm run dev -- --port 3000
```

### Issue: Changes not appearing

**Solutions**:
1. Hard refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart the dev server

### Issue: Build fails with errors

**Solutions**:
1. Check for syntax errors in your code
2. Make sure all imports are correct
3. Try reinstalling dependencies:
   ```bash
   rm -rf node_modules
   npm install
   ```

### Issue: Colors not updating

**Solutions**:
1. Make sure you're editing the correct CSS file
2. Check that variables are using the correct syntax: `var(--color-primary)`
3. Clear browser cache and refresh

---

## 🚀 Next Steps

Now that you've completed the basic setup, try these next:

### Beginner Next Steps:
1. Add more sections to the page
2. Customize fonts and typography
3. Add more custom animations
4. Create additional pages

### Intermediate Next Steps:
1. Integrate with a headless CMS
2. Add form handling
3. Implement dark/light mode toggle
4. Add analytics tracking

### Advanced Next Steps:
1. Set up continuous deployment
2. Optimize performance further
3. Add A/B testing
4. Integrate with backend API

### Recommended Examples:
- Example 2: Adding new sections (TODO)
- Example 3: Custom animations (TODO)
- Example 4: Deployment to Vercel (TODO)

---

## 📚 Related Documentation

- [Full Documentation](../docs/README.md)
- [Architecture Guide](../docs/architecture.md)
- [Development Guide](../docs/development.md)
- [Contributing Guide](../CONTRIBUTING.md)

---

## 💬 Need Help?

- **Questions**: [GitHub Discussions](https://github.com/jea022/NoName/discussions)
- **Issues**: [Report a bug](https://github.com/jea022/NoName/issues)
- **Contributing**: See [CONTRIBUTING.md](../CONTRIBUTING.md)

---

**Congratulations!** 🎉 You've successfully set up and customized your Web Product Template. Keep experimenting and building!
