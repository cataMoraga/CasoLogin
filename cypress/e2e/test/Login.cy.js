/// <reference types='cypress' />

import 'cypress-mochawesome-reporter/register'

describe('Validacion login tienda París', () => {

    beforeEach(() =>{
            //ingresar a la página
            cy.visit('https://www.paris.cl/')
    })

    it.only('Test -> validar que el usuario ingrese a su cuenta de manera correcta', () => {
        cy.title().should('eq', 'Paris.cl | Tu experiencia de compra más confiable y segura')
        cy.wait(2000)
        cy.get('#header-comuna-source-popup-close').should('be.visible').click()
        cy.get('#navigation-new > div.col-lg-3.col-md-3.col-xs-7 > div > div > div.header-side-right__auth > div').trigger('mouseover')
        cy.get('#navigation-new > div.col-lg-3.col-md-3.col-xs-7 > div > div > div.header-side-right__auth > div > div > div').invoke('attr', 'class', 'header-popup header-popup--unauthenticated header-popup--active')
        cy.get('#navigation-new > div.col-lg-3.col-md-3.col-xs-7 > div > div > div.header-side-right__auth > div > div > div > div > div > div.header-popup__actions > button').click({force:true})
        cy.get('#dwfrm_login_username').should('be.visible').type('testingqa065@gmail.com')
        cy.get('#dwfrm_login_password').should('be.visible').type('Testing2023')
        cy.get('[style="margin-bottom: 20px;"] > .btn').should('be.visible').click()
        cy.get('#navigation-new > div.col-lg-3.col-md-3.col-xs-7 > div > div > div.header-side-right__auth > div > button > div.header-customer__info > div.header-customer__heading').should('contain.text', '¡Hola, caso!')
    })
})