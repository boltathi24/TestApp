@Test_Kobil
Feature: As a product owner I want to make sure navigation,Sign up,Login,Activate new Device Features are working as expected
  
  Scenario Outline: To verify the the navigation is working as expected 
    Given I navigate to Kobil Application
    When  I click on the "<Link>"  
    Then  I should be Navigated to "<pageTitile>"
    
Examples:
|Link|pageTitile|
|Start Demo|KOBIL Trusted Sign|
|Login Help|KOBIL mAST - Help|
|Activate Create|KOBIL Trusted Sign|
|Login switch OTP|OTP Login|
|Login switch Sign|KOBIL Trusted Sign|
|Help in Trusted OTP|KOBIL mAST - Help|

  Scenario Outline: To verify the the Sign is working as expected 
    Given I navigate to Kobil Application Sign Up Page 
    When  I Sign up with "<emailId>" and condition as "<Condition>"  
    Then  I should get the Message as "<expected>"
    
Examples:
|Condition|expected|emailId|
|Captcha Not Checked|Please verify your identity with captcha|athithya24@gmail.com|
|Invalid Email Trusted Sign|You're account doesn't exists, please check your Email|ab@gmail.com|
|Invalid Email Trusted OTP|Getting user certificates failed.|ab@gmail.com|
|Captacha Not checked Activate|Please verify your identity with captcha|athithya24@gmail.com|

  Scenario Outline: To verify the presence of UI elements
    Given I navigate to Kobil web Application
    When  I check the in "<feature>" of the Application
    Then  It should have "<HyperLink>","<textBox>" and "<button>" 
    
Examples:
|feature|HyperLink|textBox|button|
|Sign Up|Go to Help Center|Email Address|Sign up|
|Login Trusted Sign|Switch to Trusted OTP|Email Address|Log in|
|Login Trusted OTP|Switch to Trusted Sign|Email Address|Log in|
|Activate|Create an account|Email Address|Activate New Device|
