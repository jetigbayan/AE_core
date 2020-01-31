const email = 'admin@primepay.ph';
const password = '123123123';

describe('Log in page', function() {

  it('Will go to the landing page of AllEasy core', function() {
    cy.visit('http://staging-afcs-core.primepay.com.ph/')

    })
})

describe('Input Email', function() {
    
    it('Should enter the username of the user', function() {
        cy.get('[name=email]').click().type(email)
        .wait(1000)
    })
})

describe('Input Password', function() {
    
    it('Should enter the password of the user', function() {
        cy.get('[name=password]').click().type(password)
        .wait(1000)
    })
})


describe('Submit credentials', function() {
    
    it('should click submit to go to the dashboard', function() {
        cy.get('[id=btn]').click()
        .wait(1000)
    })
})

// Add logout function here

// describe('function name', function() {
    
//     it('function description', function() {
        
    
//     })
// })  

