const Commands = require('../Commands');


class HotelsTest{

    
// Locators for web-Elements on the HomePage (variables)
homePageLanguageLocator ='//div[text()="English"]' 
languageSelector = '#language-selector'
travelersLocator = '//button[@data-stid="open-room-picker"]'
minusLocator = `//*[@aria-label="Decrease the number of adults in room 1"]`
addLocator = '//*[@aria-label="Increase the number of adults in room 1"]'
// functions to interact with the web-Elements on the HomePage

async languageLocator(){
    await $(this.homePageLanguageLocator).click();
}

async languageSelect(){
    await $(this.languageSelector).click();
}

async travelerSelector(){
    await $(this.travelersLocator).click();
}

async travelerMinusLocator(){
    await $(this.minusLocator).click();
}

async travelerAddLocator(){
    await $(this.addLocator).click();
}

};



module.exports = HotelsTest
