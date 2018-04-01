@Test_Kobil
Feature: As a product owner I want to make sure navigation,Sign up,Login,Activate new Device Features are working as expected
  
  Scenario Outline: To verify the the navigation is working as expected 
    Given I navigate to Kobil Application
    When  I click on the "<Link>"  
    Then  I should be Navigated to "<pageTitile>"
    
Examples:
|TestCase ID|Link|pageTitile|
|TC_TrustedSign_015|Start Demo|KOBIL Trusted Sign|
|TC_TrustedSign_016|Help in Trusted OTP|KOBIL mAST - Help|
|TC_TrustedSign_021|Login Help|KOBIL mAST - Help|
|TC_TrustedSign_022|Activate Create|KOBIL Trusted Sign|
|TC_TrustedSign_023|Login switch OTP|OTP Login|
|TC_TrustedSign_024|Login switch Sign|KOBIL Trusted Sign|


  Scenario Outline: To verify the the Sign is working as expected 
    Given I navigate to Kobil Application Sign Up Page 
    When  I Sign up with "<emailId>" and condition as "<Condition>"  
    Then  I should get the Message as "<expected>"
    
Examples:
|Test Case ID|Condition|expected|emailId|
|TC_TrustedSign_001|Captcha Not Checked|Please verify your identity with captcha|athithya24@gmail.com|
|TC_TrustedSign_006|Invalid Email Trusted Sign|You're account doesn't exists, please check your Email|ab@gmail.com|
|TC_TrustedSign_008|Invalid Email Trusted OTP|Getting user certificates failed.|ab@gmail.com|
|TC_TrustedSign_010|Captacha Not checked Activate|Please verify your identity with captcha|athithya24@gmail.com|

  Scenario Outline: To verify the presence of UI elements
    Given I navigate to Kobil web Application
    When  I check the in "<feature>" of the Application
    Then  It should have "<HyperLink>","<textBox>" and "<button>" 
    
Examples:
|TestCase ID			 |feature|HyperLink|textBox|button|
|TC_TrustedSign_025|Home Page|NA|NA|Start Demo|
|TC_TrustedSign_026|Sign Up|Go to Help Center|Email Address|Sign up|
|TC_TrustedSign_027|Login Trusted Sign|Switch to Trusted OTP|Email Address|Log in|
|TC_TrustedSign_028|Login Trusted OTP|Switch to Trusted Sign|Email Address|Log in|
|TC_TrustedSign_029|Activate|Create an account|Email Address|Activate New Device|
