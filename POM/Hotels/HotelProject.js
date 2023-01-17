const Commands = require('../Commands');


class HotelProject{

    
// Locators for web-Elements on the HomePage (variables)


//Language locators
languageLocator ='//button[@data-stid]//div[contains(@class, "uitk-text-default-theme)]';
languageSelector = '#language-selector';
saveButtonLocator = '//button[text()="Save" or text()="Guardar"]';

//traveler locators
travelersLocator = '//label[text()="Travelers"]/parent::*';
adultCountForRoomStart = '//h3[text'
decreaseAdultRoomLocatorStart = '"]'
increaseAdultRoomLocatorEnd = '//*[@aria-label="Increase the number of adults in room 1"]'
// functions to interact with the web-Elements on the HomePage


//Calender related Locators
calendarLocator = '#date_form_field-btn';
calendarDisabledDatesAndMonth = '//button[@disabled]';
currentMonthLocator = '//h2[text="January 2023"]';
calenderDoneButton ='//button[text()="Done" and @data-stid]';
calenderNextButton = '(//button[@data-stid="date-picker-paging"])[2]';
calenderPrevButton = '(//button[@data-stid="date-picker-paging"])[1]';
calendarSearchButton = '';
fiveStarRatingLocator = '';
priceSelectiveDropdown = '';


//sign in related locators
signInButton = '//button[text()="Sign in"]';
signUpLink = '//a[@data-stid="link-header-account-signup"]';
termsAndConditionsLink = '//a[text()="Terms and Conditions"]';
termsAndConditionsHeader = '//h1[text()="TERMS OF SERVICE"]';
lastRevisedText = '//span[text()= "Last revised: 01/01/23"]';
privacyStatementLink = '//a[text()="Privacy Statement"]';
lastUpdatedText  = '//p[text()="Last Updated: 20 December, 2022"]';
feedbackLocator = '//a[text()="Feedback"]';
submitLocator = '//button[@id="submit-button"]';
submitErrorLocator = '//p[@data-localization="validation-heading"]';
requiredDottedLocator = '//fieldset[@id="required_box_page_rating"]';
selectOptForReturnLocator = '//select[@id="will-you-return"]//option[text()="Somewhat likely"]';
priorHeading = '//span[@data-localization="booked-before-heading"]';
priorSelectionLocator ='//label[@for="booked-here-before-yes"]';
didYouAccomplishQuestionAns = '//label[@for="were-you-successful-yes"]';
radioGroupSelection = '//div[@class="radio-group"]//input[@value="1"]';
thankYouDisplayedMessage = '//h5[text()="THANK YOU FOR YOUR FEEDBACK."]';
signInEmailLocator = '//input[@name="email"]';
signInPasswordLocator = '//input[@name="password"]';
clickSignInSubmit = '//button[@type="submit"]';
errorMessageInSignPage = '//div[@class="uitk-error-summary"]';
invalidEmailText ='//div[@id="loginFormEmailInput-error"]';
invalidPasswordText = '//div[@id="loginFormPasswordInput-error"]';


//sign up link locators
signUpEmailLocator = '//input[@id="signupFormEmailInput"]';
signUpEmailError = '//input[@id="signupFormEmailInput-error"]';
signUpPasswordLocator = '//input[@id="signupFormPasswordInput"]';
signUpPasswordError
firstNameLocator = '//input[@id="signupFormFirstNameInput"]';
lastNameLocator = '//input[@id="signupFormLastNameInput"]';
invalidFirstName = '//div[@id="signupFormFirstNameInput-error"]';
invalidLastName ='//div[@id="signupFormLastNameInput-error"]';
keepSignInCheckboxLocator ='//input[@name="rememberMeSignUpCheckbox"]';
signUpContinueButton = '//button[@id= "signupFormSubmitButton"]';

//homepage related Get App locators
getAppLocator ='//button[text()="Get the app"]';
enterNumLocator ='//input[contains(@class, "field-input empty")]';
phoneNumError = '//div[@id="phoneNumber-error"]';

// Language Functions
async selectLanguage(newLanguage){
    await this.Commands.clickWebElement(this.languageLocator);
    await this.Commands.selectDataInDropDown(this.languageSelector, newLanguage);
    await this.Commands.clickWebElement(this.saveButtonLocator);
}

async clickLanguage(){
    await this.Commands.clickWebElement(this.languageLocator);
}

async languageSaveButton(){
    await this.Commands.clickWebElement(this.saveButtonLocator);
}

async languageSelected(){
    await this.Commands.isWebElementDisplayed(this.languageLocator);
}

async clickCalendar(){
    await this.Commands.clickWebElement(this.calendarLocator);
}

async currentMonth(){
    await this.isWebElementDisplayed(this.currentMonthLocator);
}

async disabledDatesAndMonth(){
    await this.Commands.isWebElementEnabled(this.calendarDisabledDatesAndMonth);
}

// traveler related functions
async travelerSelector(){
    await this.Commands.clickWebElement(this.travelersLocator);
}

async travelerMinusLocator(){
    await $(this.minusLocator).click();
}

async travelerAddLocator(){
    await $(this.addLocator).click();

}

//Sign in related locators
async clickSignIn(){
    await this.Commands.clickWebElement(this.signInButton);
}

async clickSignUp(){
    await this.Commands.clickWebElement(this.signUpLink);
}

async clickTermAndConditions(){
    await this.Commands.clickWebElement(this.termsAndConditionsLink);
}

async clickFeedButton(){
    await this.Commands.clickWebElement(this.feedbackLocator);
}

async clickSubmitButton(){
    await this.Commands.clickWebElement(this.submitLocator);
}
async errorOutline(){
    await this.Commands.clickWebElement(this.requiredDottedLocator);
}

async typeInEmail(Email){
    await this.Commands.clickWebElement(this.signUpEmailLocator);
    await this.Commands.typeInWebElement(this.signUpEmailLocator, Email);
}

async typeInPassword(Password){
    await this.Commands.clickWebElement(this.signUpPasswordLocator);
    await this.Commands.typeInWebElement(this.signUpPasswordLocator, Password );
}

async selectReturnOpt(){
    await this.Commands.isWebElementSelected(this.selectOptForReturnLocator);
}

async priorSelection(){
    await this.Commands.isWebElementSelected(this.priorSelectionLocator);
}
async accomplishedQuestion(){
    await this.Commands.isWebElementSelected(this.didYouAccomplishQuestionAns);
}
async selectRating(){
    await this.Commands.isWebElementSelected(this.radioGroupSelection);
}
async thankYouMessage(){
    await this.Commands.isWebElementDisplayed(this.thankYouDisplayedMessage);
}

async headerForTermsAndConditions(){
    return await $(this.termsAndConditionsHeader).isDisplayed();
}

async lastRevisedDateDisplayed(){
    return await $(this.lastRevisedText).isDisplayed();
} 

async lastUpdatedDisplayed(){
    return await $(this.lastUpdatedText).isDisplayed();
}

async clickPrivacyLink(){
     await this.Commands.clickWebElement(this.privacyStatementLink);
}

async lastRevisedDateDisplayed(){
    return await $(this.lastRevisedText).isDisplayed();
}

async lastRevisedDateDisplayed(){
    return await $(this.lastRevisedText).isDisplayed();
}

//homepage related Get App functions
async  clickGetApp(){
    await this.Commands.clickWebElement(this.getAppLocator);
}

async typeNumber(Number){
    await this.Commands.typeInWebElement(this.enterNumLocator, Number);
}

async errorNumDisplayed(){
    await this.Commands.isWebElementDisplayed(this.phoneNumError);
}


async goToGetApp(){
    await this.getAppLocator.scrollIntoView();
}

async invalidNum(){
    return await $(this.phoneNumError).isDisplayed();
}


};




module.exports = HotelProject
