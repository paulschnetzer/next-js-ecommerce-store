function SetupTheNewTest(){
    cy.visit("http://localhost:3000/checkout")
    cy.get('[data-cy=login-first-name]').type("Paul")
    cy.get('[data-cy=login-last-name]').type("Schnetzer")
    cy.get('[data-cy=login-adress]').type("Zichygasse 10/6")
    cy.get('[data-cy=login-email]').type("paul.schnetzer98@gmail.com")
    cy.get('[data-cy=login-number]').type("+436507774301")
    cy.get('[data-cy=login-full-name]').type("Paul Schnetzer")
    cy.get('[data-cy=login-card-number]').type("AT942060416724331323")
    cy.get('[data-cy=login-expirationdate]').type("02/24")
}

describe("testing the checkout page", () => {
  it('Checks the requiremed of th form validation', () => {
    cy.visit("http://localhost:3000/checkout")
    cy.get('[data-cy=login-Submit]').click()
    cy.contains("❌")
    cy.get('[data-cy=login-first-name]').type("Paul")
    cy.contains('❌First Name is required❌').should('not.exist');
    cy.get('[data-cy=login-last-name]').type("Schnetzer")
    cy.contains('❌Second Name is required❌').should('not.exist');
    cy.get('[data-cy=login-adress]').type("Zichygasse 10/6")
    cy.contains('❌Adress is required❌').should('not.exist');
    cy.get('[data-cy=login-email]').type("paul.schnetzer98@gmail.com")
    cy.contains('❌E-Mail is required❌').should('not.exist');
    cy.get('[data-cy=login-number]').type("+436507774301")
    cy.contains('❌Phone Number is required❌').should('not.exist');
    cy.get('[data-cy=login-full-name]').type("Paul Schnetzer")
    cy.contains('❌Name is required❌').should('not.exist');
    cy.get('[data-cy=login-card-number]').type("AT942060416724331323")
    cy.contains('❌Card Number is required❌').should('not.exist');
    cy.get('[data-cy=login-expirationdate]').type("02/24")
    cy.contains('❌Expiration date is required❌').should('not.exist');
    cy.get('[data-cy=login-Submit]').click()
    cy.contains('Please Sign in to continue!').should('not.exist');
    cy.contains("Total Price")
    cy.get('[data-cy=buy-button]').click()
    cy.contains("Thank you for your order!")

  })
  it('Checks the form validation for First Name', () => {
    SetupTheNewTest()
    cy.get('[data-cy=login-first-name]').clear()
    cy.get('[data-cy=login-first-name]').type("123")
    cy.get('[data-cy=login-Submit]').click()
    cy.contains("Please Sign in to continue!")
  })
  it('Checks the form validation for Second Name', () => {
    SetupTheNewTest()
    cy.get('[data-cy=login-last-name]').clear()
    cy.get('[data-cy=login-last-name]').type("123")
    cy.get('[data-cy=login-Submit]').click()
    cy.contains("Please Sign in to continue!")
  })
  it('Checks the form validation for Email', () => {
    SetupTheNewTest()
    cy.get('[data-cy=login-email]').clear()
    cy.get('[data-cy=login-email]').type("123")
    cy.get('[data-cy=login-Submit]').click()
    cy.contains("Please Sign in to continue!")
  })
  it('Checks the form validation for phone-number', () => {
    SetupTheNewTest()
    cy.get('[data-cy=login-number]').clear()
    cy.get('[data-cy=login-number]').type("123")
    cy.get('[data-cy=login-Submit]').click()
    cy.get('[data-cy=login-number]').type("ABC")
    cy.get('[data-cy=login-Submit]').click()
    cy.contains("Please Sign in to continue!")
  })
  it('Checks the form validation for login-full-name', () => {
    SetupTheNewTest()
    cy.get('[data-cy=login-full-name]').clear()
    cy.get('[data-cy=login-full-name]').type("123")
    cy.get('[data-cy=login-Submit]').click()
    cy.contains("Please Sign in to continue!")
  })
  it('Checks the form validation for card number', () => {
    SetupTheNewTest()
    cy.get('[data-cy=login-card-number]').clear()
    cy.get('[data-cy=login-card-number]').type("123")
    cy.get('[data-cy=login-Submit]').click()
    cy.contains("Please Sign in to continue!")
  })
  it('Checks the form validation for Expiration Date ', () => {
    SetupTheNewTest()
    cy.get('[data-cy=login-expirationdate]').clear()
    cy.get('[data-cy=login-expirationdate]').type("123")
    cy.get('[data-cy=login-Submit]').click()
    cy.contains("Please Sign in to continue!")
  })
})