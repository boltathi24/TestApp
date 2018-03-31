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
#|Login Help|KOBIL mAST - Designed, developed and made in Germany|
#|Activate Create|KOBIL mAST - Designed, developed and made in Germany|
#|Login switch OTP|swit|
#|Login switch Sign|swit|