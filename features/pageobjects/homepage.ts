import { ChainablePromiseElement } from 'webdriverio';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    public get cookiePopup () {
        return $('div.ot-sdk-container>div.ot-sdk-row');
    }

    public get acceptCookiesButton () {
        return $('button#onetrust-accept-btn-handler');
    }

    public get volvoIcon () {
        return $('img[alt="Volvo"]');
    }

    public get CarSefetyLink () {
        return $('//a[text()="Learn more about car safety"]');
    }

    public get SefetyHeader () {
        return $('//h2[text()="Safety"]');
    }


    async handleCookies () {
        await (await this.cookiePopup).waitForDisplayed({timeout: 2000});
        await (await this.acceptCookiesButton).click();
    }

    async clickCarSefety() {
        await (await this.CarSefetyLink).waitForDisplayed({timeout: 3000});
        await (await this.CarSefetyLink).click();
    }

    async launchUrl () {
        await browser.url('/a-million-more');
    }
}

export default new HomePage();
