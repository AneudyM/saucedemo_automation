export default class BasePage {
    static pause(ms) {
        cy.wait(ms)
    }

    static logInfo(message) {
        cy.log(message)
    }

    static setDesktopViewport() {
        cy.viewport('macbook-16')
    }

    static setMaxDesktopViewportResolution() {
        cy.viewport(1920, 1080);
    }

    static setMobileViewport() {
        cy.viewport('iphone-xr');
    }

    static setTabletViewport() {
        cy.viewport('ipad-2');
    }
}