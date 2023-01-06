"# CasoLoginConCypress" 

Se realiza la validación del test -> el usuario ingresa a su cuenta de manera correcta 

Se realizo de dos formas:
-La primera mediante la forma normal de cypress 

Este test se encuentra en la carpeta cypress/e2e/test/Login.cy.js

Aquí se realizan los pasos del test

-La segunda mediante POM, la cual hace que se entienda de mejor manera para los usuarios (como negocio u otras áreas)

Este test se encuentra en la carpeta cypress/e2e/test/LoginPO.cy.js
Los pasos se encuentran en la carpeta cypress/pages/LoginPO.js

en la carpeta pages, se encuentran descritos los pasos a realizar y en la carpeta test se llaman estos pasos, dejando más amigable a la vista

Se puede demostrar mediante los reportes de ambas pruebas, son las mismas, lo que cambia son los pasos que se visualizan una vez terminados los tests.