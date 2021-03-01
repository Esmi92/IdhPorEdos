describe('IDH por estados en mobile',()=>{

    it('Probar Selecciones',()=>{
        cy.viewport('iphone-6')
        cy.visit('http://localhost:3000/')
        cy.get('#year').select('2011')
        cy.get('#orden').select('123')
        cy.get('#orden').select('321')
        cy.get('#orden').select('abc')
        cy.get('#estado').select('PUEBLA')
        cy.get('#btn').click()
    })
});