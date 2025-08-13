
//.skip é para ele pular o teste 
describe('Organge HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    userPasswordField:"[name='password']",
    loginButton: '.orangehrm-login-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role='alert']"
  }


  it('Login - Success ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.userPasswordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin22')
    cy.get(selectorList.userPasswordField).type('admin323123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
   
  })
})

