
import userData from '../fixtures/user-data.json';
describe('Organge HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    userPasswordField:"[name='password']",
    loginButton: '.orangehrm-login-button',
    sectionTitleTopBar: 'oxd-grid-3 orangehrm-dashboard-grid',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']"
  }


  it('Login - Success ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.userName)
    cy.get(selectorList.userPasswordField).type(userData.userSucess.userPassword)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.userName)
    cy.get(selectorList.userPasswordField).type(userData.userFail.userPassword)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
   
  })
})

