describe("Adding and deleting into the shopping chart", () => {
  it('checks if the shopping chart is working properly', () => {
    cy.visit("http://localhost:3000/")
    cy.get('.grid1 > a ').click()
    cy.get('input').clear()
    cy.get('input').type('5')
    cy.get('button').click()
    cy.contains("Columbia Tolima")
    cy.contains("500")
    cy.get('a:nth-child(5)').contains('1')
    cy.get('[data-cy=nav-home]').click()
    cy.get('.grid2 > a ').click()
    cy.contains("Columbia Ruiz")
    cy.get('input').clear()
    cy.get('input').type('12')
    cy.get('button').click()
    cy.contains("1200")
    cy.get('a:nth-child(5)').contains('2')
    cy.get('[data-cy=1delete]').click()
    cy.get('[data-cy=1delete]').should('not.exist');
    cy.get('a:nth-child(5)').contains('1')
    cy.get('[data-cy=nav-home]').click()
    cy.get('.grid2 > a ').click()
    cy.contains("Columbia Ruiz")
    cy.get('input').clear()
    cy.get('input').type('18')
    cy.get('button').click()
    cy.contains("1800")




  })
})