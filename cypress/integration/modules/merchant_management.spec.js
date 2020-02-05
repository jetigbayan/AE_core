    const email = 'admin@primepay.ph';
    const password = '123123123';

describe('Landing Page', function() {

    it('should open the AllEasy core', function() {
      cy.visit('http://staging-afcs-core.primepay.com.ph/')
      .wait(1000)

    })
})

describe('Enter admin credentials', function() {

    it('should enter the admin credentials', function() {   

      cy.get('[name=email]').click()
      .type(email)
      cy.get('[name=password]').click()
      .type(password)
      cy.get('[id=btn]').click()
      .wait(3000)

    })
})


describe('Admin Dashboard', function() {

  it('should be redirected to the AllEasy Dashboard after logging in', function() {
    cy.wait(3000)

    })
})


describe('Merchant Management', function() {

  it('should be redirected to the Merchant Management', function() {

    cy.contains('Merchant Management').click()
      .wait(2000)
    
    })
})
   

describe('Log out', function() {

  it('admin should be logged out of the system and redirected to the landing page', function() {

    cy.get('.dropdown-toggle').click()
    {
      force:true
    }
    cy.contains('Logout').click()
    cy.wait(800)
    cy.get('.modal')
    .contains('Logout')
    .click()
    
    })
})