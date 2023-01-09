const {Given, When, Then} = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelProject = require("../../POM/Hotels/HotelProject");

const hotelProject = new HotelProject();

//Glue code
/**
 * Glue code is a regular expression which helps to map Scenario-step with functions (step-definition)
 */
/**
 * TC 17
 */

Given(/^I am on hotels$/, async function () {
    await browser.url('https://www.hotels.com');
})

When(/^I click on dates$/, async function() {
    await hotelProject.clickDate()
});

Then(/^I go to current month if not displayed$/, async function (){
    await hotelProject.clickCalendar();
   expect(await hotelProject.currentMonth(), 'Current date is not displayed').to.be.true
    
    
});

When(/^I verify for the current month)$/, async function () {
    await hotelProject.currentMonth();
});

Then(/^ I verify past (dates|month) are disabled$/, async function () {
    await hotelProject.disabledDatesAndMonth();
});

/**
 * TC 18
 */

When(/^I click on travelers$/, async function() {
    await hotelProject.travelerSelector();
});

Then(/^ I select adults as 6 $/, async function (){

});

And(/^ I select children as 3 $/, async function () {
   
});

And(/^ I select first child age 4 $/, async function () {
 
});

And(/^ I select second child age under 1$/, async function () {
 
});

And(/^ I select third child age 7 $/, async function () {
 
});

Then(/^I click done $/, async function (){

}); 

Then(/^I verify total numbers of guest in sum of adults and children as same as selected on step 3 and 4 $/, async function(){

});

/**
 * TC 24
 */

When(/^I click on Sign in$/, async function() {
    await hotelProject.clickSignIn();
});

And(/^I click Feedback$/, async function (){
   await hotelProject.clickFeedButton();
});

When(/^ I click on submit button$/, async function (){
   await hotelProject.clickSubmitButton();
});

Then(/^ I verify star boxes section is in a red dotted box$/, async function () {
   await hotelProject.errorOutline();
});


/**
 * TC 25
 */

When(/^I click on "Sign in" $/, async function() {
    await hotelProject.clickSignIn();
});

Then(/^I click on "Feedback" $/, async function (){
    await hotelProject.clickFeedButton();
})
   

When(/^ I verify select any star-rating$/, async function () {
    await hotelProject.selectRating();
});

Then(/^ I select any option for "How likely are you to return to Hotels.com? "$/, async function () {
  await hotelProject.selectReturnOpt();
});

And(/^ I select any answer for "Prior to this visit, have you ever booked on Hotels.com?"$/,async function(){
    await hotelProject.priorSelection();
});

And(/^I select any answer for "Did you accomplish what you wanted to do on this page?" $/,async function(){
    await hotelProject.accomplishedQuestion();
});

And(/^I click on submit button $/,async function(){
    await hotelProject.clickSubmitButton();
});
And(/^I verify "THANK YOU FOR YOUR FEEDBACK." is displayed$/,async function(){
    expect(await hotelProject.thankYouDisplayedMessage(), 'Message is not displayed').to.be.true
});


/**
 * TC 30
 */

When(/^I scroll to "Get the app" button$/, async function() {
    await hotelProject.goToGetApp();
});

Then(/^ I enter '0000000000' in phone number$/, async function (number){
   await hotelProject.typeNumber(number);
});

When(/^I click on "Get the app" button$/, async function () {
    await hotelProject.clickGetApp();
});

Then(/^ I verify "Please enter a valid phone number." error is displayed$/, async function () {
   expect(await hotelProject.invalidNum(), 'Error is not displayed').to.be.true
});

/**
 * TC 31
 */

When(/^I click on "English" language$/, async function() {
    await hotelProject.clickLanguage();
});

Then(/^ I select "Espanol (Estados Unidos)" in language dropdown $/, async function (expLanguage){
    const languageOnWeb = await hotelProject.selectLanguage();
    expect(languageOnWeb, 'Language is not updated as expected').to.equal(expLanguage)
});

When(/^I click on "Save" button $/, async function () {
   await hotelProject.languageSaveButton();
});

Then(/^ I verify "Espanol" is displayed$/, async function () {
    expect(await hotelProject.languageLocator(), 'Current language is not displayed').to.be.true
});

Then(/^ I click on "Espanol"$/, async function () {
    await hotelProject.clickLanguage();
});

Then(/^ I select "English (United States)" in language dropdown$/, async function (newLanguage) {
    const languageOnWeb1 = await hotelProject.selectLanguage();
    expect(languageOnWeb1, 'Language is not updated as expected').to.equal(newLanguage)
});

Then(/^I click "Guardar" button $/, async function () {
   await hotelProject.languageSaveButton();
});

Then(/^I verify "English" is displayed $/, async function () {
    expect(await hotelProject.languageLocator(), 'Current language is not displayed').to.be.true
});

