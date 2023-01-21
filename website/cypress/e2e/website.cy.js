describe('Website', () => {
  it('Visit Homepage', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  it('Submit Email', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.submit.link').click()
    cy.get('#email').type('hello@world.com')
    cy.get('#submit').click()
    cy.get('#homeLink').click()
  })
})