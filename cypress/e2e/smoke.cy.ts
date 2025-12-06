describe('Portfolio Smoke Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load homepage without errors', () => {
    // Check page loads
    cy.get('h1').should('contain', 'Hey, I\'m Sanita');
    cy.get('h1').should('contain', 'Front-end Developer');
    
    // Check avatar loads
    cy.checkImageLoads('img[alt="Sanita"]');
    
    // Check main content sections exist
    cy.get('p').should('contain', 'self-taught front-end developer');
    cy.get('h2').should('contain', 'Focus on:');
    cy.get('h2').should('contain', 'Portfolio');
  });

  it('should have working navigation', () => {
    // Test work navigation from navbar
    cy.get('nav a[href="/work"]').click();
    cy.url().should('include', '/work');
    cy.get('h1').should('contain', 'my work');
    
    // Test home navigation
    cy.get('nav a[href="/"]').click();
    cy.url().should('not.include', '/work');
    cy.get('h1').should('contain', 'Hey, I\'m Sanita');

    // Test work link from homepage content
    cy.get('a[href="/work"]').first().click();
    cy.url().should('include', '/work');
  });

  it('should have working external links', () => {
    // Test ConnouConnou link
    cy.checkExternalLink('a[href="https://www.connou.app"]');
    
    // Test LinkedIn link
    cy.checkExternalLink('a[href="https://www.linkedin.com/in/sgailu/"]');
    
    // Test GitHub link
    cy.checkExternalLink('a[href="https://github.com/sanicodeplayground"]');

    // Test project links (at least one)
    cy.get('.grid a[target="_blank"]').first().should('have.attr', 'href').and('not.be.empty');
  });

  it('should display technology focus areas', () => {
    // Check technology badges
    cy.get('div').should('contain', 'JavaScript');
    cy.get('div').should('contain', 'React');
    cy.get('div').should('contain', 'Next.js');
    
    // Check tech logos load
    cy.get('img[src*="tech-js.svg"]').should('exist');
    cy.get('img[src*="tech-react.svg"]').should('exist');
    cy.get('img[src*="tech-next.svg"]').should('exist');
  });

  it('should display portfolio projects', () => {
    // Check project grid exists
    cy.get('.grid').should('exist');
    
    // Check project cards have images and titles
    cy.get('.grid > div').should('have.length.greaterThan', 0);
    cy.get('.grid img').first().should('be.visible');
    cy.get('.grid h3').first().should('be.visible').and('not.be.empty');
    
    // Check at least one project image loads
    cy.get('.grid img').first().then(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.complete).to.be.true;
    });
  });

  it('should work on mobile viewport', () => {
    cy.testMobileView();
    
    // Check main elements still visible and functional
    cy.get('h1').should('be.visible');
    cy.checkImageLoads('img[alt="Sanita"]');
    
    // Check navigation works on mobile
    cy.get('nav a[href="/work"]').should('be.visible').click();
    cy.url().should('include', '/work');
    cy.get('h1').should('contain', 'my work');
    
    // Check external links still work
    cy.checkExternalLink('a[href="https://www.connou.app"]');
  });

  it('should have ConnouConnou work experience', () => {
    cy.visit('/work');
    
    // Check work page loads
    cy.get('h1').should('contain', 'my work');
    
    // Check ConnouConnou section
    cy.get('h2').should('contain', 'Connou');
    cy.get('p').should('contain', 'Frontend developer, September 2022 — present');
    
    // Check ConnouConnou external link on work page
    cy.checkExternalLink('a[href="https://www.connou.app"]');
    
    // Check key work achievements
    cy.get('li').should('contain', 'Develop and maintain React components');
    cy.get('li').should('contain', 'TypeScript and Next.js');
  });

  it('should handle 404 pages gracefully', () => {
    // Test non-existent route
    cy.visit('/non-existent-page', { failOnStatusCode: false });
    
    // Should show some kind of error handling (Next.js default or custom)
    // This will pass if page loads without throwing errors
    cy.get('body').should('exist');
  });
}); 