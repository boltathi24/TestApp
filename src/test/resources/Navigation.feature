@Navigation
Feature: As a User, the Navigation inbetween the Application should work as expected
  
  Scenario Outline: To verify the the navigation is working as expected 
    Given I navigate to Kobil Application
    When  I click on the "<Link>"  
    Then  I should be Navigated to "<pageTitile>"
    
Examples:
|Link|pageTitile|
|Start Demo|KOBIL Trusted Sign|
#|Privacy SignUp|KOBIL Trusted Login|
#|Privacy Activate|KOBIL mAST - Designed, developed and made in Germany|
|Login Help|KOBIL mAST - Help|
|Activate Create|KOBIL Trusted Sign|
|Login switch OTP|OTP Login|
|Login switch Sign|KOBIL Trusted Sign|