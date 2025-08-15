
import userData from '../fixtures/user-data.json';
import DashboardPage from '../pages/dashboardPage.js';
import LoginPage  from '../pages/loginPage.js';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Organge HRM Tests', () => {

 it('Login - Fail', () => {
    //Work with LoginPage
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.userpassword)
    loginPage.checkAccessInvalid()
  })
   it('Login - Sucess', () => {
    //Work with LoginPage
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.userpassword)
    dashboardPage.checkDashboardPage()
  })

})

