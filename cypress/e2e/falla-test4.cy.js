describe('Prueba de contraste para el texto HOT TREND', () => {
    it('debe tener un contraste adecuado para asegurar la legibilidad', () => {
      cy.visit('http://localhost:3000/');
  
      // Buscamos el elemento que contiene "HOT TREND"
      cy.contains('Hot Trend')
       // .should('be.visible')
        .then($element => {
          // Obtenemos los estilos computados del elemento
          const style = window.getComputedStyle($element[0]);
          const colorTexto = style.color;
          const colorFondo = style.backgroundColor;
  
          // Si el fondo es transparente, podría ser necesario obtener el color del contenedor.
          // Por simplicidad asumiremos que el elemento ya tiene definido un color de fondo.
  
          // Calculamos el ratio de contraste entre el color del texto y el fondo
          const ratio = getContrastRatio(colorTexto, colorFondo);
          cy.log(`Ratio de contraste calculado: ${ratio}`);
  
          // Verificamos que el ratio de contraste sea mayor a 4.5 (estándar WCAG para texto normal)
          expect(ratio).to.be.greaterThan(4.5);
        });
    });
  });