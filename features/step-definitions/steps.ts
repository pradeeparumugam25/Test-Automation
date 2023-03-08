import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/homepage.js';

Given(/^I am on the Volvo website page$/, async () => {
    console.log('Tested');
    await HomePage.launchUrl();
    await browser.pause(10000);
    await HomePage.handleCookies();
    expect(await (await HomePage.volvoIcon).isDisplayed()).toBe(true);
    
});
When(/^Navigate to car safety$/, async () => {
    await HomePage.clickCarSefety();
     expect(await (await HomePage.SefetyHeader).isDisplayed()).toBe(true); 
});
Then(/^Safety should be displayed$/ , async () => {
    expect(await HomePage.SefetyHeader.isDisplayed()).toBe(true);
})
Then(/^options in safety should be displayed$/ , async () => {
    expect(await (await HomePage.CarSefetyLink).isDisplayed()).toBe(true);
})


