@Project
Feature: Project

    Background:

        Given I am on hotels
       

    @project @TC17
    Scenario: 
        When I click on dates
        Then I go to current month if not displayed
        And I verify for the current month
        And I verify past dates (if any) are disabled
        And I verify back button on current month is disabled

    @project @TC18
    Scenario: Verify user can update number of guests on Home page
        When I click on travelers
        Then I select adults as 6
        And I select children as 3
        And I select first child age 4
        And I select second child age under 1
        And I select third child age 7
        Then I click done
        And I verify total numbers of guest in sum of adults and children as same as selected on step 3 and 4

    @project @TC24
    Scenario: Verify error is displayed when user submits the empty feedback form
        When I click on Sign in
        And I click Feedback
        And I click on submit button
        Then I verify error message is displayed(Please fill in the required information highlighted below)
        And I verify star boxes section is in a red dotted box
        

    @project @TC25
    Scenario: Verify user can submit feedback after completing the feedback form
        When I click on "Sign in"
        And I click on "Feedback"
        And I verify Select any star-rating
        And I verify Enter any comments
        Then I select any option for "How likely are you to return to Hotels.com? "
        And I select any answer for "Prior to this vist, have you ever booked on Hotels.com?"
        And I select any answer for "Did you accomplish what you wnted to do on this page?"
        Then I click on submit button
        And I verify "THANK YOU FOR YOUR FEEDBACK." is displayed
          
    @project @TC30
    Scenario: Verify invalid phone number error
        When I scroll to "Get the app" button
        And I enter "0000000000" in phone number
        Then I click on "Get the app" button
        And I verify "Please enter a valid phone number." error is displayed
       


    @project @TC31
    Scenario: Verify language can be changed successfully
        When I click on "English" language
        And I select "Espanol (Estados Unidos)" in language dropdown
        Then I click on "Save" button
        And  I verify "Espanol" is displayed
        Then I click on "Espanol"
        And I select "English (United States)" in language dropdown
        Then I click "Guardar" button
        And I verify "English" is displayed

