@Run
Feature: To Test the Kobil Applications
  
  Scenario Outline: To verify the the navigation is working as expected 
    Given I navigate to Kobil Application
    When  I click on "<Application>" start Demo Button 
    Then  I should be Navigated to "<pageTitile>"
    
Examples:
|Application|pageTitile|
|TRUSTED SIGN|KOBIL Trusted Sign|
#|TRUSTED LOGIN|KOBIL Trusted Login|
#|TRUSTED WEB|KOBIL mAST - Designed, developed and made in Germany|