describe('Merchant management', function() {
    
    const email = 'admin@primepay.ph';
    const password = '123123123';

    it('should access the AllEasy core', function() {
      cy.visit('http://staging-afcs-core.primepay.com.ph/')
      cy.get('[name=email]').click()
        .type(email)
      cy.get('[name=password]').click()
        .type(password)
      cy.get('[id=btn]').click()
        .wait(3000)
    })
    it('should be redirected to the AllEasy Dashboard after logging in', function() {
      cy.get('a[href="/merchant-management/"]').click()
      })
//     it('should be show the AllEasy Merchant Management', function() {
//         // Should be on a new URL which includes '/commands/actions'
//    //   cy.url().should('include', '/commands/actions')
//      })
  })