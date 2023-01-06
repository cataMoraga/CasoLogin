/// <reference types='cypress' />

import 'cypress-mochawesome-reporter/register'

import LoginPO from '../../pages/LoginPO'

describe('Validacion login tienda París mediante Page Object Model', () => {

    const login = new LoginPO()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it.only('Test -> validar que el usuario ingrese a su cuenta de manera correcta mediante Page Object Model', () => {
        login.visitHome()
        login.loginPage()
        login. validateMessage()
    })
})