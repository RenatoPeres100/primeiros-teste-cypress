
import userData from '../fixtures/user-data.json';
describe('Organge HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    userPasswordField:"[name='password']",
    loginButton: '.orangehrm-login-button',
    sectionTitleTopBar: 'oxd-grid-3 orangehrm-dashboard-grid',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name=lastName]",
    genericField: ".oxd-input--active",
    genericSelectField: ".oxd-select-text-input",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    numberSelectTab: '[tabindex="3"]',

  }


  it.only('User Info Update - Success ', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.userName)
    cy.get(selectorList.userPasswordField).type(userData.userSucess.userPassword)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('FirstNameTes')
    cy.get(selectorList.middleNameField).clear().type('Midle Name')
    cy.get(selectorList.lastNameField).clear().type('LastName')
    cy.get(selectorList.genericField).eq(3).clear().type('NickName')
    cy.get(selectorList.genericField).eq(4).clear().type('NickName')
    cy.get(selectorList.genericField).eq(5).clear().type('NickName')
    cy.get(selectorList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericSelectField).eq(2).clear().type('Brazilian')
    cy.get(selectorList.submitButton, selectorList.numberSelectTab).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close').click()


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.userName)
    cy.get(selectorList.userPasswordField).type(userData.userFail.userPassword)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
   
  })
})

