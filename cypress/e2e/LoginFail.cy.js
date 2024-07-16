describe('Test login ', () => {
  //test case 1
  it('Test case 1: login fail, email or password is not correct', () => {
    cy.viewport(1536, 960)
    cy.visit('https://mom-baby-milk-shop.vercel.app/login');
    cy.wait(5000)
    cy.get('#email').click().type('phong@gmail.com')
    cy.wait(3000)
    cy.get('#password').click().type('phong@gmail.com')
    cy.wait(3000)
    cy.get('.bg-violet-500').click()
    cy.wait(3000)
    cy.get('.text-red-600').should('contain', 'Email hoặc mật khẩu không đúng')
  })
})  
