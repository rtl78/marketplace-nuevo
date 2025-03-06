describe('Wallpaper and scroll tests', () => {
    it('The screen background should not change when scrolling', () => {
          cy.visit('http://localhost:3000/');
   
      cy.get('body')
        .invoke('css', 'background-color')
        .then((colorInicial) => {
          
          cy.scrollTo('bottom');
  
          
          cy.wait(500);
  
      
          cy.get('body')
            .invoke('css', 'background-color')
            .should('eq', colorInicial);
        });
    });
  });
  