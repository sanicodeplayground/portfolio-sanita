# E2E Testing with Cypress

## 🧪 Smoke Tests Overview

This portfolio site uses **Cypress smoke tests** - a focused set of 8 essential tests that verify critical functionality without overwhelming complexity.

## 🚀 Running Tests

### Prerequisites
1. Make sure your Next.js development server is running:
   ```bash
   npm run dev
   ```

2. The tests expect the site to be available at `http://localhost:3000`

### Test Commands

```bash
# Open Cypress Test Runner (interactive)
npm run cypress:open

# Run tests in headless mode (CI/CD)
npm run cypress:run

# Run tests with mobile viewport
npm run cypress:run:mobile

# Run tests with specific browser
npm run test:e2e
```

## 📋 Test Coverage

### What Gets Tested (8 Tests):

1. **Homepage Loads** - Basic content, avatar image, main sections
2. **Navigation Works** - Between pages, navbar links, content links  
3. **External Links** - ConnouConnou, LinkedIn, GitHub, project links
4. **Technology Display** - JavaScript, React, Next.js badges and logos
5. **Portfolio Projects** - Project grid, images, titles load correctly
6. **Mobile Responsive** - Core functionality works on mobile viewport
7. **Work Experience** - ConnouConnou work details and external link
8. **Error Handling** - 404 pages don't crash the application

### What Doesn't Get Tested:
- Complex user interactions
- Form submissions (no forms exist)
- Performance benchmarks
- Cross-browser compatibility
- Visual regression testing

## ⏱️ Test Duration
- **Full suite**: ~2 minutes
- **Individual test**: ~10-20 seconds

## 🔧 Configuration

- **Base URL**: `http://localhost:3000`
- **Desktop Viewport**: 1280x720
- **Mobile Viewport**: 375x667 (iPhone SE)
- **Timeout**: 10 seconds for commands
- **Screenshots**: On failure only
- **Videos**: Disabled for faster runs

## 🛠️ Custom Commands

- `cy.checkExternalLink(selector)` - Validates external links
- `cy.checkImageLoads(selector)` - Ensures images load properly  
- `cy.testMobileView()` - Switches to mobile viewport

## 🚨 Troubleshooting

### Common Issues:

1. **Tests fail with "baseUrl" error**
   - Make sure `npm run dev` is running first

2. **Image loading tests fail**
   - Check that images exist in `/public/images/` directory
   - Verify image paths in project data

3. **External link tests fail**
   - Links might be updated - check actual URLs in components
   - Network issues can cause timeouts

4. **Mobile tests fail**
   - Responsive CSS might need adjustments
   - Elements might be hidden on mobile

### Debug Mode:
```bash
# Run with debug logs
DEBUG=cypress:* npm run cypress:run
```

## 📁 File Structure

```
cypress/
├── e2e/
│   └── smoke.cy.ts          # Main test file
├── fixtures/
│   └── test-data.json       # Test data
└── support/
    ├── commands.ts          # Custom commands
    └── e2e.ts              # Global setup
```

## 🎯 Success Criteria

All tests should pass consistently. If any test fails:

1. Check if the functionality still works manually
2. Update test selectors if UI changed
3. Update expected content if copy changed
4. Report any genuine bugs found

This focused test suite ensures your portfolio works reliably without requiring extensive maintenance. 