package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Screenshots;
import page.log;

public class steps {

	
	private String appName=null;
	
	log a=new log();
	@Screenshots(afterEachStep=true)
	@Given("^I navigate to Kobil Application$")
	public void i_navigate_to_Kobil_Application() throws Throwable {
	   a.navigateToApp();

	}
	@Screenshots(forEachAction=true)
	@When("^I click on \"([^\"]*)\" start Demo Button$")
	public void i_click_on_start_Demo_Button(String application) throws Throwable {
		 this.appName=application;
			a.redirect(application);
	}
	
	@Then("^I should be Navigated to \"([^\"]*)\"$")
	public void i_should_be_Navigated_to(String expPageTitle) throws Throwable {
	  a.validateRedirect(expPageTitle);
	}
	
}
