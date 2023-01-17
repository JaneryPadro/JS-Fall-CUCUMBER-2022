@Project2
Feature: Project2

Background:

     Given I am on hotels

     @project2 @TC20
     Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
     When Click Sign in link
     And Click Sign up link
     And  Click “Terms and Conditions” link
     Then Verify “Terms and Conditions” page opens in new tab
     And Verify “Last revised“ date format (expected format: MM/dd/yy)
     Then Click “Privacy Statement” link
     And Verify “Privacy Statement” page opens in new tab
     And Verify “Last Updated“ date format (expected format: dd MMMM, yyyy)


     @project2 @TC21
     Scenario: Verify Verification message for invalid sign in credentials
     When Click on “Sign in” link
     And Click on Sign in button
     And Enter invalid email address
     And  Enter invalid password
     And  Click on Sign in button
     Then  Verify error message is displayed. (Email and password don't match. Please try again.)    

     @project2 @TC22
     Scenario: Verify error message for invalid data in SignUp form
     When Click on SignIn link
     And  Click on SignUp link
     And Enter invalid email address with at least '@' symbol (#!@###)
     And  Verify error is displayed (Enter a valid email address)
     And  Enter invalid first name (!@)
     And  Verify error is displayed (First name cannot contain special characters)
     Then Enter invalid last name (%^&)
     And   Verify error is displayed (Last name cannot contain special characters)
     And Enter password
     And  Verify “Keep me signed in” checkbox is displayed and enabled
     Then Verify “Continue” button is displayed but NOT enabled

  

     @project2 @TC23
     Scenario:  Verify filter-by and sort-by functionality works as expected
     When I Search Manhattan, NY
     Then Enter Check-in date as Feb-10-2023
     And Enter Check-out date as Feb-16-2023
     And Click on Search button
     And Click on 5* from star-rating filter
     And Select “Price” from sort-by dropdown
     And Verify all hotels in search results are *-rated as selected in above step
     Then Verify all hotels in search results are *-rated as selected in above step

    
     @project2 @TC28
     Scenario: Verify Child-age dropdowns are same as number of Children selected
     When Click on Travelers
     And Select “Children” as 2
     And Verify Children-age dropdown are 2
     And Verify minus-button is enabled
     And Select “Children” as 6
     And Verify Children-age dropdown are 6
     And Verify Plus button is disabled
     And Verify minus-button is enabled
     And Select “Children” as 5
     And Verify Children-age dropdown are 5
     And Verify Plus button is enabled
     And Verify minus-button is enabled
     And Select “Children” as 0
     And Verify Children-age dropdown is NOT displayed
     And Verify Plus button is enabled
     Then Verify minus-button is disabled

     @project2 @TC32
     Scenario: Verify password strength bar and messages
         Scenario Outline: Verify password strength bar and messages
        And I click on Sign in
        And I click on Sign up
        When I enter user@test.com in Email address
        And I enter fUser in First name
        And I enter lUser in Last name
        And I enter <password> in Password
        Then I verify Password strength bar is <strengthBar> filled
        And I verify Password strength message is <strengthMsg>

    Example:
            | password     | strengthBar | strengthMsg |
            | abcd         | not         | Weak        |
            | abcd@123     | half        | Weak        |
            | abcd@12324   | almost      | Strong      |
            | abcd@12@pl@2 | completely  | Very Strong |

     @project2 @TC33
     Scenario: Verify weak password messages
      Scenario Outline: Verify weak password messages
        And I click on Sign in
        And I click on Sign up
        When I enter user@test.com in Email address
        And I enter fUser in First name
        And I enter lUser in Last name
        And I enter <password> in Password
        And I verify <msg1> message is displayed
        And I verify <msg2> message is displayed

    Example:
            | password | msg1                                | msg2                             |
            | abcd     | Includes 8-64 characters            | Combines letters and numbers     |
            | abcd@123 | Add more words that are less common | Avoid common character sequences |
    