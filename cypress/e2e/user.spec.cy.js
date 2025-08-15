
import userData from '../fixtures/user-data.json';
import LoginPage  from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Organge HRM Tests', () => {

  const selectorList = {  

    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name=lastName]",
    genericField: ".oxd-input--active",
    genericSelectField: ".oxd-select-text-input",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    genericCombobox: ".oxd-select-text--active",
    secondItemCombobx: '.oxd-select-dropdown > :nth-child(2)',
    thirdItemCombobox: '.oxd-select-dropdown > :nth-child(3)',
    submitButton: ".orangehrm-left-space",
    
  }


  it.only('User Info Update - Success ', () => {
    //Work with LoginPage
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.userpassword)
    //word with DashboardPage
    dashboardPage.checkDashboardPage()
    //Work with MenuPage
    menuPage.accessoMyInfo()
    cy.get(selectorList.firstNameField).clear().type('FirstNameTes')
    cy.get(selectorList.middleNameField).clear().type('Midle Name')
    cy.get(selectorList.lastNameField).clear().type('LastName')
    cy.get(selectorList.genericField).eq(3).clear().type('NickName')
    cy.get(selectorList.genericField).eq(4).clear().type('NickName')
    cy.get(selectorList.genericField).eq(5).clear().type('NickName')
    cy.get(selectorList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close').click()
    cy.get(selectorList.genericCombobox).eq(0).click()
    cy.get(selectorList.secondItemCombobx).click()
    cy.get(selectorList.genericCombobox).eq(1).click() 
    cy.get(selectorList.thirdItemCombobox).click()
    
    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.userName)
    cy.get(selectorList.userPasswordField).type(userData.userFail.userPassword)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
   
  })
})

