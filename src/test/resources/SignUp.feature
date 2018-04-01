@SignUp
Feature: To Test the Sign Up Feature
  
  Scenario Outline: To verify the the Sign is working as expected 
    Given I navigate to Kobil Application Sign Up Page 
    When  I Sign up with "<emailId>" and condition as "<Condition>"  
    Then  I should get the Message as "<expected>"
    
Examples:
|Condition|expected|emailID|
|Captcha Not Checked|Please verify your identity with captcha|athithya24@gmail.com|
|Invalid Email Trusted Sign|You're account doesn't exists, please check your Email|ab@gmail.com|
|Invalid Email Trusted OTP|Getting user certificates failed.|ab@gmail.com|
|Captacha Not checked Activate|Please verify your identity with captcha|athithya24@gmail.com|