it('Tam sipariş akışı testi - Terminal Pizza', () => {
    // API mock
    cy.intercept('POST', '**/ordersPizza', {
        statusCode: 201,
        body: { id: '123', customId: 789 }
    }).as('postOrder')

    // 1. Pizza seçim sayfasına git
    cy.visit('/order-pizza/1')

    // 2. Pizza bilgileri kontrolü
    cy.contains('Terminal Pizza').should('be.visible')
    cy.contains('.00TL').should('be.visible')

    // 3. Boyut seçimi
    cy.contains('L').click()
    cy.contains('L').should('have.class', 'bg-amber-500')

    // 4. Hamur seçimi
    cy.contains('Kalın').click()
    cy.contains('Kalın').should('have.class', 'bg-amber-500')

    // 5. Malzeme seçimi (5 adet)
    const malzemeler = ['Pepperoni', 'Mısır', 'Sosis', 'Biber', 'Domates']
    malzemeler.forEach(malzeme => {
        cy.contains('label', malzeme).prev('input').check()
    })

    // 6. Yorum ekleme
    cy.get('textarea[name="yorum"]').type('Ekstra peynirli olsun lütfen! Acılı sos istemiyorum.')

    // 7. Adet artırma
    cy.contains('+').click()
    cy.contains('+').click() // 2 kere tıkla
    cy.get('input[readonly]').should('have.value', '3')

    // 8. Fiyat kontrolü
    cy.contains('Seçimler').should('exist')
    cy.contains('Toplam').should('exist')

    // 9. Sipariş butonu enabled kontrolü
    cy.get('button').contains('SİPARİŞ VER').should('not.be.disabled')

    // 10. Siparişi gönder
    cy.get('button').contains('SİPARİŞ VER').click()

    // 11. API çağrısı kontrolü
    cy.wait('@postOrder').then((interception) => {
        expect(interception.response.statusCode).to.equal(201)
    })

    // 12. Success sayfasına yönlendirme kontrolü
    cy.url().should('include', '/success/789')
    cy.contains('SİPARİŞ ALINDI').should('be.visible')
})