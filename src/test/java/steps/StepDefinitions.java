package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.HomePage;
import page.Login_SignUP_Page;
import page.Navigation;
import page.Setup;
import page.ValidateUI;

public class StepDefinitions {

private Login_SignUP_Page login_signUP=new Login_SignUP_Page();
private HomePage home=new HomePage();
private Navigation navigate=new Navigation();
private ValidateUI validateUIScreen=new ValidateUI();
private Setup set=new Setup();
private Scenario myScenario;

@Before()
public void embedScreenshotStep(Scenario scenario) {

    myScenario = scenario;

}


public void take() throws Throwable {

    try {
        myScenario.write("Current Page Title is " + Setup.getDriver().getTitle());
        byte[] screenshot = ((TakesScreenshot)Setup.getDriver()).getScreenshotAs(OutputType.BYTES);
        myScenario.embed(screenshot, "image/png");  // Stick it in the report
    } catch (WebDriverException somePlatformsDontSupportScreenshots) {
    	somePlatformsDontSupportScreenshots.printStackTrace();
    } 
}


	@Given("^I navigate to Kobil Application$")
	public void i_navigate_to_Kobil_Application() throws Throwable {
	   set.SetupDriver();
		set.navigateToApp();
	   take();
	  

	}
	
	@When("^I click on the \"([^\"]*)\"$")
	public void i_click_on_the(String link) throws Throwable {
	   navigate.navigate(link);
	   take();
	}

	@Then("^I should be Navigated to \"([^\"]*)\"$")
	public void i_should_be_Navigated_to(String expPageTitile) throws Throwable {
	navigate.navigateValidation(expPageTitile);
	  take();
	  Setup.getDriver().quit();
	}
	
	
	
	@Given("^I navigate to Kobil Application Sign Up Page$")
	public void i_navigate_to_Kobil_Application_Sign_Up_Page() throws Throwable {
	    
	   set.SetupDriver();
		set.navigateToApp();
		home.navigateToStartDemo();
		take();
	}

	@When("^I Sign up with \"([^\"]*)\" and condition as \"([^\"]*)\"$")
	public void i_Sign_up_with_and_condition_as(String email, String condition) throws Throwable {
		login_signUP.signUp(email, condition);
		take();
		
	}

	@Then("^I should get the Message as \"([^\"]*)\"$")
	public void i_should_get_the_Message_as(String expected) throws Throwable {
	   Thread.sleep(10000);
	   login_signUP.validateError(expected);
	  take();
	  Setup.getDriver().quit();
	}

	

	@Given("^I navigate to Kobil web Application$")
	public void i_navigate_to_Kobil_web_Application() throws Throwable {
	 set.SetupDriver();
	   set.navigateToApp();
	   home.navigateToStartDemo();
	   take();
	   
	}

	@When("^I check the in \"([^\"]*)\" of the Application$")
	public void i_check_the_in_of_the_Application(String feature) throws Throwable {
		validateUIScreen.navigateToFeature(feature);
		take();
		
	   
	}
	@Then("^It should have \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
	public void it_should_have_and(String hyperLink, String txtBox, String button) throws Throwable {
		validateUIScreen.validateUI(hyperLink,txtBox,button);
		take();
		  Setup.getDriver().quit();
	}

}
