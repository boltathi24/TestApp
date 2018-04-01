package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.Navigation;
import page.Setup;

public class NavigationSteps {

	
	private Scenario myScenario;
	Setup a=new Setup();
	Navigation navi=new Navigation();
	
	
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
	   a.SetupDriver();
		a.navigateToApp();
	   take();
	  

	}
	
	@When("^I click on the \"([^\"]*)\"$")
	public void i_click_on_the(String link) throws Throwable {
	   navi.navigate(link);
	   take();
	}

	@Then("^I should be Navigated to \"([^\"]*)\"$")
	public void i_should_be_Navigated_to(String expPageTitile) throws Throwable {
	navi.navigateValidation(expPageTitile);
	  take();
	  Setup.getDriver().quit();
	}


	
	
}
