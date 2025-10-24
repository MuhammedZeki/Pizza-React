describe("Success page", () => {
    it('Success page tam akış testi - GET isteği ile', () => {
        const mockOrder = {
            customId: 123,
            name: 'Position Absolute Acı Pizza',
            boyut: 'L',
            kalinlik: 'Kalın',
            malzemeler: ['Pepperoni', 'Mısır', 'Sosis', 'Biber', 'Domates'],
            toplamFiyat: 150
        }

        cy.intercept('GET', '**/ordersPizza', {
            statusCode: 200,
            body: [mockOrder]
        }).as('getOrders')

        cy.visit('/success/123')

        cy.wait('@getOrders')

        cy.get('img[src="/iteration-1/logo.svg"]').should('be.visible')

        cy.contains('SİPARİŞ ALINDI').should('be.visible')
        cy.contains('Lezzetler yolda').should('be.visible')

        cy.contains('Position Absolute Acı Pizza').should('be.visible')
        cy.contains('Boyut: L').should('be.visible')
        cy.contains('Hamur : Kalın').should('be.visible')

        cy.contains('Ek Malzemeler : Pepperoni, Mısır, Sosis, Biber, Domates')
            .should('be.visible')

        cy.contains('Seçimler').next().should('contain', '25.00TL')
        cy.contains('Toplam').next().should('contain', '150.00TL')
    })
    it('Farklı sipariş detayları ile success page', () => {
        const mockOrder = {
            customId: 456,
            name: 'Terminal Pizza',
            boyut: 'M',
            kalinlik: 'İnce',
            malzemeler: ['Sucuk', 'Kanada Jambonu', 'Jalepeno'],
            toplamFiyat: 110
        }

        cy.intercept('GET', '**/ordersPizza', {
            statusCode: 200,
            body: [mockOrder]
        }).as('getOrders')

        cy.visit('/success/456')

        cy.wait('@getOrders')

        cy.contains('Terminal Pizza').should('be.visible')
        cy.contains('Boyut: M').should('be.visible')
        cy.contains('Hamur : İnce').should('be.visible')

        cy.contains('Ek Malzemeler : Sucuk, Kanada Jambonu, Jalepeno').should('be.visible')
        cy.contains('Seçimler').next().should('contain', '15.00TL')
        cy.contains('Toplam').next().should('contain', '110.00TL')
    })

    it('Minimum malzeme ile success page', () => {
        const mockOrder = {
            customId: 789,
            name: '5 Kişilik Hackathlon Pizza',
            boyut: 'S',
            kalinlik: 'Normal',
            malzemeler: ['Pepperoni', 'Mısır', 'Sosis', 'Biber', 'Domates'],
            toplamFiyat: 120
        }

        cy.intercept('GET', '**/ordersPizza', {
            statusCode: 200,
            body: [mockOrder]
        }).as('getOrders')

        cy.visit('/success/789')

        cy.wait('@getOrders')

        cy.contains('5 Kişilik Hackathlon Pizza').should('be.visible')
        cy.contains('Boyut: S').should('be.visible')
        cy.contains('Hamur : Normal').should('be.visible')

        cy.contains('Ek Malzemeler : Pepperoni, Mısır, Sosis, Biber, Domates')
            .should('be.visible')

        cy.contains('Seçimler').next().should('contain', '25.00TL')
        cy.contains('Toplam').next().should('contain', '120.00TL')
    })
    it('Maximum malzeme ile success page', () => {
        const mockOrder = {
            customId: 999,
            name: 'Bol Malzemeli Pizza',
            boyut: 'L',
            kalinlik: 'Kalın',
            malzemeler: [
                'Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak',
                'Sosis', 'Soğan', 'Sucuk', 'Biber', 'Kabak', 'Domates'
            ],
            toplamFiyat: 200
        }

        cy.intercept('GET', '**/ordersPizza', {
            statusCode: 200,
            body: [mockOrder]
        }).as('getOrders')

        cy.visit('/success/999')

        cy.wait('@getOrders')

        cy.contains('Bol Malzemeli Pizza').should('be.visible')

        cy.contains('Pepperoni').should('be.visible')
        cy.contains('Domates').should('be.visible')

        cy.contains('Seçimler').next().should('contain', '50.00TL')
        cy.contains('Toplam').next().should('contain', '200.00TL')
    })
    it('Malzemesiz pizza ile success page', () => {
        const mockOrder = {
            customId: 111,
            name: 'Sade Pizza',
            boyut: 'M',
            kalinlik: 'Normal',
            malzemeler: [],
            toplamFiyat: 85
        }

        cy.intercept('GET', '**/ordersPizza', {
            statusCode: 200,
            body: [mockOrder]
        }).as('getOrders')

        cy.visit('/success/111')

        cy.wait('@getOrders')

        cy.contains('Sade Pizza').should('be.visible')

        cy.contains('Ek Malzemeler :').should('be.visible')

        cy.contains('Seçimler').next().should('contain', '0.00TL')
        cy.contains('Toplam').next().should('contain', '85.00TL')
    })
    it('API hatası durumunda success page', () => {
        cy.intercept('GET', '**/ordersPizza', {
            statusCode: 500,
            body: { error: 'Server error' }
        }).as('getOrdersError')

        cy.visit('/success/123')

        cy.wait('@getOrdersError')

        cy.contains('SİPARİŞ ALINDI').should('be.visible')
        cy.get('img[src="/iteration-1/logo.svg"]').should('be.visible')

    })
    it('Sipariş bulunamadığı durum', () => {
        const mockOrders = [
            {
                customId: 999,
                name: 'Başka Pizza',
                boyut: 'L',
                kalinlik: 'Kalın',
                malzemeler: ['Pepperoni'],
                toplamFiyat: 100
            }
        ]

        cy.intercept('GET', '**/ordersPizza', {
            statusCode: 200,
            body: mockOrders
        }).as('getOrders')

        cy.visit('/success/123')

        cy.wait('@getOrders')

        cy.contains('SİPARİŞ ALINDI').should('be.visible')
        cy.contains('Lezzetler yolda').should('be.visible')

        cy.contains('Position Absolute Acı Pizza').should('not.exist')
    })
    it('Success page kapsamlı test', () => {
        const completeOrder = {
            customId: 42,
            name: 'Position Absolute Acı Pizza',
            boyut: 'L',
            kalinlik: 'Kalın',
            malzemeler: ['Pepperoni', 'Mısır', 'Sosis', 'Biber', 'Domates', 'Sucuk'],
            toplamFiyat: 180,
            adet: 2
        }

        cy.intercept('GET', '**/ordersPizza', {
            statusCode: 200,
            body: [completeOrder]
        }).as('getOrders')

        cy.visit('/success/42')

        cy.wait('@getOrders')

        cy.get('img[src="/iteration-1/logo.svg"]').should('be.visible')

        cy.contains('SİPARİŞ ALINDI').should('be.visible')
        cy.contains('Lezzetler yolda').should('be.visible')

        cy.contains('Position Absolute Acı Pizza').should('be.visible')
        cy.contains('Boyut: L').should('be.visible')
        cy.contains('Hamur : Kalın').should('be.visible')

        cy.contains('Ek Malzemeler : Pepperoni, Mısır, Sosis, Biber, Domates, Sucuk')
            .should('be.visible')

        cy.contains('Seçimler').next().should('contain', '30.00TL')
        cy.contains('Toplam').next().should('contain', '180.00TL')

        cy.get('footer').should('be.visible')
    })
})

