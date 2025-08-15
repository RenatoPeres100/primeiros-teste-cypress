
import userData from '../fixtures/user-data.json';
import LoginPage  from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Organge HRM Tests', () => {

  it('User Info Update - Success ', () => {
    //Work with LoginPage
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.userpassword)
    //word with DashboardPage
    dashboardPage.checkDashboardPage()
    //Work with MenuPage
    menuPage.accessoMyInfo()
    //Work with MyInfoPage > fillPersonalDetails
    myInfoPage.fillPersonalDetails(chance.first(),'middleName',chance.last(),chance.string())
    //Work with MyInfoPage > fillEmployeeDetails
    myInfoPage.fillEmployeeDetails('employeeId',' otherId',' licenceExpiry',' 2025-03-10',' ssnNumber',' sinNumber')
    //Work with MyInfoPage > fillStatus
    myInfoPage.fillStatus()
    //Work with MyInfoPage > saveForm
    myInfoPage.saveForm()
   

  })
 
})

