/// <reference types="cypress" />

import { MENU_BAR_V2, MENU_PIZZA } from "../../src/data"
const menuItems = [
  'Terminal Pizza',
  '5 Kişipk Hackathion Pizza',
  'Tavuklu Pizzza',
  'Beyaz Frosty',
  'Mutlu Burger',
  'Acı burger'
]
describe('template spec', () => {

  beforeEach(() => {
    cy.visit("/")
  })

  it("Header'da sayfasında img var mı ", () => {
    cy.get('[data-cy="headerImg"]').should("have.attr", "src", "/iteration-1/logo.svg").and("be.visible")
  })
  it("header yazılarda bir problem var mı?", () => {
    cy.contains('KOD ACIKTIRIR').should('be.visible')
    cy.contains('PIZZA, DOYURUR').should('be.visible')
    cy.contains('ACIKTIM').should('be.visible')
  })
  it("header home-banner var mı?", () => {
    cy.get("header").should("have.css", "background-image").and("include", "home-banner.png")
  })
  it("fırsat kaçırma mobilde hidden mı?", () => {
    cy.viewport("iphone-8")
    cy.get('[data-cy="title"]').should("have.css", "display", "none")
  })
  it("fırsat kaçırma mobilde hidden mı?", () => {
    cy.viewport(1400, 800)
    cy.get('[data-cy="title"]').should("have.css", "display", "block")
  })
  it('MENU_BAR verileri doğru şekilde render ediliyor mu', () => {
    MENU_BAR_V2.forEach((menu, i) => {
      cy.get(`[data-cy="menu-bar-text-${i}"]`).should("contain", menu.text)
      cy.get(`[data-cy="menu-img-${i}"]`).should("have.attr", "src", menu.src)
    })
  })
  it('MENU_PIZZA verileri doğru şekilde render ediliyor mu', () => {
    MENU_PIZZA.forEach((pizza, index) => {
      cy.get(`[data-cy="pizza-title-${index}"]`).should("contain", pizza.title)
      cy.get(`[data-cy="pizza-img-${index}"]`).should("have.attr", "src", pizza.src)
      cy.get(`[data-cy="pizza-star-${index}"]`).should("contain", pizza.star)
      cy.get(`[data-cy="pizza-price-${index}"]`).should("contain", pizza.price + "₺")
    })
  })

  it('Ana başlıklar doğru stil ve içeriğe sahip mi', () => {
    cy.contains('en çok paketlenen menüler')
      .should('have.css', 'color', 'rgb(206, 40, 41)')
      .and('have.css', 'font-family')

    cy.contains('Acıktıran Kodlara Doyuran Lezettler')
      .should('have.css', 'font-size', '40px')
  })
  it('Kartlarda background image doğru şekilde uygulanmış mı', () => {
    cy.get('.bg-\\[url\\(\\/iteration-2\\/cta\\/kart-1\\.png\\)\\]')
      .should('have.css', 'background-image')
      .and('include', 'kart-1.png')

    cy.get('.bg-\\[url\\(\\/iteration-2\\/cta\\/kart-2\\.png\\)\\]')
      .should('have.css', 'background-size', 'contain')
  })
  it('Butonlarda hover efektleri çalışıyor mu', () => {
    cy.get('[data-cy="order-button"]').first()
      .trigger('mouseover')
      .should('have.css', 'transform')
  })

  it('Footer temel elementleri render ediliyor mu', () => {
    cy.get('footer').should('be.visible')
    cy.get('footer').should('have.css', 'background-color', 'rgb(26, 26, 26)')
  })

  it('Logo görüntüleniyor mu', () => {
    cy.get('img[src="/iteration-2/footer/logo-footer.svg"]')
      .should('be.visible')
      .and('have.attr', 'src', '/iteration-2/footer/logo-footer.svg')
  })
  it('İletişim bilgileri doğru şekilde render ediliyor mu', () => {
    cy.contains('341 London Road, Istanbuk Türkiye').should('be.visible')
    cy.get('img[src="/iteration-2/footer/icons/icon-1.png"]').should('be.visible')

    cy.contains('muhammedcodes@gmail.com').should('be.visible')
    cy.get('img[src="/iteration-2/footer/icons/icon-2.png"]').should('be.visible')

    cy.contains('+90 216 123 45 67').should('be.visible')
    cy.get('img[src="iteration-2/footer/icons/icon-3.png"]').should('be.visible')
  })
  it('Hot Menu bölümü doğru içeriğe sahip mi', () => {
    cy.contains('Hot Menu').should('be.visible')

    menuItems.forEach(item => {
      cy.contains(item).should('be.visible')
    })
  })
  it('Instagram bölümü ve resimleri render ediliyor mu', () => {
    cy.contains('Instagram').should('be.visible')

    for (let i = 0; i <= 5; i++) {
      cy.get(`img[src="/iteration-2/footer/insta/li-${i}.png"]`)
        .should('be.visible')
    }
  })
  it('Footer bottom bölümü doğru içeriğe sahip mi', () => {
    cy.contains('© created by Muhammed Zeki Yılmaz').should('be.visible')

    cy.get('.fa-twitter').should('exist')

  })
  it('Doğru stiller uygulanmış mı', () => {
    cy.get('footer').should('have.css', 'background-color', 'rgb(26, 26, 26)')

    cy.get('.text-white').first().should('have.css', 'color', 'rgb(255, 255, 255)')

    cy.get('.font-barlow').first()
      .should('have.css', 'font-family')
      .and('match', /Barlow/i)
  })
})