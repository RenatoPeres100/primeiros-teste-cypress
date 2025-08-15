class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name=lastName]",
            genericField: ".oxd-input--active",
            genericSelectField: ".oxd-select-text-input",
            dateField: "[placeholder='yyyy-dd-mm']",
            genericCombobox: ".oxd-select-text--active",
            secondItemCombobx: '.oxd-select-dropdown > :nth-child(2)',
            thirdItemCombobox: '.oxd-select-dropdown > :nth-child(3)',
            dateCloseButton: ".--close",
          
            submitButton: ".orangehrm-left-space",
        }
        return selectors
    }

    fillPersonalDetails(firstName,middleName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }
    fillEmployeeDetails(employeeId, otherId, driveLicence, licenceExpiryDate, ssnNumber, sinNumber) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driveLicence)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenceExpiryDate) 
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(sinNumber)
    }
    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close').click()
    }
    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().secondItemCombobx).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click() 
        cy.get(this.selectorsList().thirdItemCombobox).click()
    }
}

export default MyInfoPage