describe('Core landing page', function() {
    it('should show the landing page of AllEasy core', function() {
      cy.visit('http://staging-afcs-core.primepay.com.ph/')
    //   cy.get('[name=email]').click()
      // Should be on a new URL which includes '/commands/actions'
    //   cy.url().should('include', '/commands/actions')
    })
  })