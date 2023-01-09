const {Given, When, Then} = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Project = require("../../POM/Hotels/HotelProject");

const project = new Project();

//Glue code
/**
 * Glue code is a regular expression which helps to map Scenario-step with functions (step-definition)
 */
Given(/^I am on hotels$/, async function () {
    await browser.url('https://www.hotels.com');
})

When(/^ I click on (.+)$/, async function() {
    await homepage.changeLanguage(newLanguageOption)
});

Then(/^ I go to current (.+) if displayed$/, async function (){
    const languageOnWeb = await homepage.getLanguageFromWeb();
    expect(languageOnWeb, 'Language is not updated as expected').to.equal(expLanguage)
});

And(/^ I select number of adults in (.+) as (\d+)$/, async function (room, adultCount) {
    this.roomNum = room;
    await homepage.changeAdultCountInRoom(this.roomNum, adultCount)
});

Then(/^ I verify the (minus|plus) button for adults is (disabled|enabled)$/, async function (btName, expState) {
    const actualBtnState = await homepage.getBtnState(btnName, this.roomNum);
    console.log(`\n\n actualBtnState --> ${actualBtnState}\n\n`);
    switch (expState) {
        case 'disabled':
            expect(actualBtnState, `${btnName} button is not disabled`).to.equal('true');
             break;
        case 'enabled':
            expect(actualBtnState, `${btnName} button is not enabled`).to.be.null;
    
        default:
            break;
    }
});