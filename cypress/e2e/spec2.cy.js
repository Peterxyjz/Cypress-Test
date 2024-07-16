describe('Test login ', () => {
    //test case 2
    it('Test case 2: login success', () => {
        cy.viewport(1536, 960)
        cy.visit('https://mom-baby-milk-shop.vercel.app/login');
        cy.wait(5000)
        cy.get('#email').click().type('phong@gmail.com')
        cy.wait(3000)
        cy.get('#password').click().type('Admin12345@')
        cy.wait(3000)
        cy.get('.bg-violet-500').click()
        cy.wait(3000)
        cy.url().should('contain', 'https://mom-baby-milk-shop.vercel.app')
    })

})
