const {Given, When, Then} = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelProject = require("../../POM/Hotels/HotelProject");

const hotelProject = new HotelProject();

/**
 * TC 20
 */

Given(/^I am on hotels$/, async function () {
    await browser.url('https://www.hotels.com');
})

When(/^Click Sign in link$/, async function() {
    await hotelProject.clickSignIn();
});

Then(/^ Click Sign up link$/, async function (){
   await hotelProject.clickSignUp();
});

When(/^Verify “Terms and Conditions” page opens in new tab$/, async function () {
    expect(await hotelProject.termsAndConditionsHeader(), 'New tab is not displayed').to.be.true
});

Then(/^Verify “Last revised“ date format (expected format: MM/dd/yy)$/, async function () {
   expect(await hotelProject.lastRevisedDateDisplayed(), 'last revised date is not displayed').to.be.true;
});

Then(/^Click “Privacy Statement” link$/, async function () {
   await hotelProject.clickPrivacyLink();
});

Then(/^Verify “Privacy Statement” page opens in new tab$/, async function () {
   await hotelProject.();
});

Then(/^Verify “Last Updated“ date format (expected format: dd MMMM, yyyy)$/, async function () {
   expect(await hotelProject.lastUpdatedDisplayed(), 'last updated is not displayed').to.be.true
});

/**
 * TC 21
 */

When(/^Click on “Sign in” link$/, async function() {
   await hotelProject.clickSignIn();
});

Then(/^Click on Sign in button$/, async function (){
   await hotelProject.clickSignUp();
});

And(/^Enter invalid email address $/, async function () {
   await hotelProject.typeInEmail(@!);
});

And(/^Enter invalid password$/, async function () {
   await hotelProject.typeInPassword(111);
});

And(/^ Click on Sign in button 1$/, async function () {
 
});

And(/^ Verify error message is displayed. (Email and password don't match. Please try again.)  $/, async function () {
   expect(await hotelProject.)
});


/**
 * TC 22
 */

When(/^Click on SignIn link$/, async function() {
    await hotelProject.clickSignIn();
});

And(/^Click on SignUp link$/, async function (){
   await hotelProject.clickSignUp();
});

When(/^Enter invalid email address with at least '@' symbol (#!@###)$/, async function (){
   await hotelProject.();
});

When(/^Verify error is displayed (Enter a valid email address)$/, async function (){
   await hotelProject.();
});

When(/^Enter invalid first name (%^&)$/, async function (){
   await hotelProject.();
});

When(/^Verify error is displayed (First name cannot contain special characters)$/, async function (){
   await hotelProject.();
});

When(/^Enter invalid last name (%^&)$/, async function (){
   await hotelProject.();
});

When(/^ Verify error is displayed (Last name cannot contain special characters)$/, async function (){
   await hotelProject.();
});

When(/^Enter password$/, async function (){
   await hotelProject.();
});
When(/^ Verify “Keep me signed in” checkbox is displayed and enabled$/, async function (){
   await hotelProject.();
});
When(/^Verify “Continue” button is displayed but NOT enabled$/, async function (){
   await hotelProject.();
});

/**
 * TC 23
 */

When(/^I Search Manhattan, NY$/, async function() {
    await hotelProject.();
});

And(/Enter Check-in date as Feb-10-2023$/, async function (){
   await hotelProject.n();
});

When(/^Enter Check-out date as Feb-16-2023$/, async function (){
   await hotelProject.();
});

Then(/^Click on Search button$/, async function () {
   await hotelProject.e();
});

Then(/^Click on 5* from star-rating filter$/, async function () {
   await hotelProject.();
});

Then(/^Select “Price” from sort-by dropdown$/, async function () {
   await hotelProject.();
});
Then(/^Verify all hotels in search results are *-rated as selected in above step$/, async function () {
   await hotelProject.();
});
Then(/^Verify all hotels in search results are *-rated as selected in above step$/, async function () {
   await hotelProject.();
});

/**
 * TC 28
 */

When(/^Click on Travelers$/, async function() {
    await hotelProject.();
});

And(/^Select “Children” as 2$/, async function (){
   await hotelProject.();
});

When(/^Verify Children-age dropdown are 2$/, async function (){
   await hotelProject.();
});

Then(/^Verify minus-button is enabled$/, async function () {
   await hotelProject.();
});

When(/^Select “Children” as 6$/, async function() {
   await hotelProject.();
});

When(/^Verify Children-age dropdown are 6$/, async function() {
   await hotelProject.();
});

When(/^Verify Plus button is disabled$/, async function() {
   await hotelProject.c();
});

When(/^Verify minus-button is enabled$/, async function() {
   await hotelProject.();
});

When(/^Select “Children” as 5$/, async function() {
   await hotelProject.();
});

When(/^Verify Children-age dropdown are 5$/, async function() {
   await hotelProject.();
});

When(/^Verify Plus button is enabled$/, async function() {
   await hotelProject.();
});

When(/^Verify minus-button is enabled$/, async function() {
   await hotelProject.();
});

When(/^Select “Children” as 0$/, async function() {
   await hotelProject.();
});

When(/^Verify Children-age dropdown is NOT displayed$/, async function() {
   await hotelProject.();
});

When(/^Verify Plus button is enabled$/, async function() {
   await hotelProject.();
});

When(/^ Verify minus-button is disabled$/, async function() {
   await hotelProject.();
});
/**
 * TC 32
 */

When(/^I click on Sign in$/, async function() {
    await hotelProject.clickSignIn();
});

And(/^I click on Sign up$/, async function (){
   await hotelProject.clickSignUp();
});

When(/^I enter user@test.com in Email address$/, async function (){
   await hotelProject.();
});

Then(/^I enter fUser in First name$/, async function () {
   await hotelProject.();
});

Then(/^I enter lUser in Last name$/, async function () {
   await hotelProject();
});

Then(/^I enter <password> in Password$/, async function () {
   await hotelProject.e();
});

Then(/^I verify Password strength bar is <strengthBar> filled$/, async function () {
   await hotelProject.();
});

Then(/^ I verify Password strength message is <strengthMsg>$/, async function () {
   await hotelProject.();
});

/**
 * TC 33
 */

When(/^I click on Sign in$/, async function() {
    await hotelProject.clickSignIn();
});

And(/^I click on Sign up$/, async function (){
   await hotelProject.clickSignUp();
});

When(/^I enter user@test.com in Email address$/, async function (){
   await hotelProject.();
});

Then(/^I enter fUser in First name $/, async function () {
   await hotelProject.();
});

Then(/^I enter lUser in Last name $/, async function () {
   await hotelProject.();
});

Then(/^I enter <password> in Password $/, async function () {
   await hotelProject.();
});

Then(/^I verify <msg1> message is displayed $/, async function () {
   await hotelProject.();
});

Then(/^I verify <msg2> message is displayed $/, async function () {
   await hotelProject.();
});