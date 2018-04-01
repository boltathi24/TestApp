package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.HomePage;
import page.Login_SignUP_Page;
import page.Setup;

public class SignupSteps {
	
	Setup a=new Setup();
	Login_SignUP_Page ab=new Login_SignUP_Page();
	HomePage h=new HomePage();
	@Given("^I navigate to Kobil Application Sign Up Page$")
	public void i_navigate_to_Kobil_Application_Sign_Up_Page() throws Throwable {
	    
	   a.SetupDriver();
		a.navigateToApp();
		h.navigateToStartDemo();
	}

	@When("^I Sign up with \"([^\"]*)\" and condition as \"([^\"]*)\"$")
	public void i_Sign_up_with_and_condition_as(String email, String condition) throws Throwable {
		ab.signUp(email, condition);
		
	}

	@Then("^I should get the Message as \"([^\"]*)\"$")
	public void i_should_get_the_Message_as(String expected) throws Throwable {
	   Thread.sleep(15000);
	   ab.validateError(expected);
	  Setup.getDriver().quit();
	}


}
