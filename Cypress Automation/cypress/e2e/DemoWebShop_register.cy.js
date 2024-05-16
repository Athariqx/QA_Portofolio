describe('template spec', () => {
    it('Register Successful', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('athariq')
    cy.get('#LastName').type('Rifky')
    cy.get('#Email').type('atharix11@gmail.com')
    cy.get('#Password').type('tes123456')
    cy.get('#ConfirmPassword').type('tes123456')
    cy.get('#register-button').click()
    //Your registration completed
  })

  it('Register Failed - email already exists', () => {
    //same flow with the first "it"
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('athariq')
    cy.get('#LastName').type('Rifky')
    cy.get('#Email').type('atharix11@gmail.com')
    cy.get('#Password').type('tes123456')
    cy.get('#ConfirmPassword').type('tes123456')
    cy.get('#register-button').click()
    //The specified email already exists
  })

  it('Register Failed - Wrong email', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('latihan')
    cy.get('#LastName').type('otomasi')
    cy.get('#Email').type('atharix11Email')
    cy.get('#Password').type('tes123456')
    cy.get('#ConfirmPassword').type('tes123456')
    cy.get('#register-button').click()
    
  })
  it('Register Failed - password do not match', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('latihan')
    cy.get('#LastName').type('otomasi')
    cy.get('#Email').type('test@email.com')
    cy.get('#Password').type('tes123456')
    cy.get('#ConfirmPassword').type('tes12345')
    cy.get('#register-button').click()
    //The password and confirmation password do not match
  })

})