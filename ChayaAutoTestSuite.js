
/// references

describe('Mytestsuite', function()
{
    it('Verify title of userstory1', function()
    {
    cy.visit('https://intellihr.com/')   // visit intelli website
    cy.get('p.label').contains('HR Software & People Analytics')  // should see intellihome page 
    cy.title().should('eq','intelliHR: The Intelligent People Management Software')  // verify intelli logo
    //cy.get(".header-logo-img-normal.active").should('be.visible')  // Alternate way to  verify intelli logo
    cy.get('.menu-item-1615').should('be.visible').click()   //Select case study
    cy.get('a[href^="https://intellihr.com/case-studies/"] > h2').should('be.visible')  // should se multiple case studies
    cy.contains('Fujitsu General').click()  // click fujitsu case study
    cy.get('.post-banner-text-container').should('be.visible') // should see relvant case study
    cy.get('#mktoForm_1136 > div.mktoButtonRow > span > button').should('contain','Download now')
    })

    it('Verify title of userstory2', function()
    {
    cy.visit('https://qa-tech-test-demo.intellihr.net/spa/settings')   // visit intelli website
    cy.url().should('include','auth/login')
    cy.get('input[name=username]').should('be.visible')
    cy.get('input[name=password]').should('be.visible')
    })
    it('Verify title of userstory3', function()
    {
    cy.visit('https://qa-tech-test-demo.intellihr.net/auth/login')   // visit intelli website
    cy.get('div.sign-in-form > div > p').contains('Sign in to intelliHR')
    cy.get('input[name=username]').should('be.visible').should('be.enabled').type('ally.m')
    cy.get('input[name=password]').should('be.visible').should('be.enabled').type('Ally-Want$-To-Test-T3n4nt')
    cy.get('button[type=submit]').click()
    cy.wait(20000)
    cy.get('._2L43AeN9_K40xq0-9oZ9kg').should('be.visible')
    cy.get('h1[data-component-type=text]').should('be.visible')
    })   
    it('Verify title of userstory4', function()
    {
    cy.visit('https://qa-tech-test-demo.intellihr.net/spa/settings/skills')   // visit intelli website
    cy.get('input[name=username]').should('be.visible').should('be.enabled').type('sara.h')
    cy.get('input[name=password]').should('be.visible').should('be.enabled').type('Uncle-Ben-$aid-With-@dmin-P0wer-Comes-???')
    cy.get('button[type=submit]').click()
    cy.wait(10000)
    cy.get('span[data-component-type="link_button"]').click()
    cy.get('input[id=name]').type('Admin2')
    cy.get('div.Select-placeholder').click()
    cy.get('div.Select-placeholder').type('Administration')
    cy.get('#skillDisciplineId').type('{enter}')
    cy.get('textarea[id=description]').type('Test Analyst Role')
    cy.get('button.primary').contains('Save').click()
    cy.get('#filterControllerSearchInput').type('Admin2')
    cy.get('span[data-component-type="link_button"]').click()
    cy.get('input[id=name]').type('Admin3')
    cy.get('div.Select-placeholder').click()
    cy.get('div.Select-placeholder').type('Administration')
    cy.get('#skillDisciplineId').type('{enter}')
    cy.get('textarea[id=description]').type('Test Analyst Role')
    cy.get('button.primary').contains('Save').click()
    cy.wait(5000)
    cy.get('#filterControllerSearchInput').clear()
    cy.get('#filterControllerSearchInput').type('Admin3')
    cy.get('button.sc-iQNlJl.dlVLUP > i').click()
    cy.wait(5000)
    cy.get('.kxyHvx > button').contains('Delete').click()
    cy.get(':nth-child(2) > .sc-hmzhuo').contains('Delete').click()
    cy.wait(5000)
    cy.get('#filterControllerSearchInput').clear()
    cy.get('#filterControllerSearchInput').type('Admin')
    cy.get('.sc-cSHVUG.VsjfC').contains('Admin2').should('be.visible')
    cy.get('#filterControllerSearchInput').clear()
    cy.get('#filterControllerSearchInput').type('Admin3')
    cy.get(5000)
    cy.get('div.sc-kfGgVZ.hSRtJd').contains('Could not find any skills')    
    })
})