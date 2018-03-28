package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Screenshots;
import page.log;

public class ste {

	
	log a=new log();
	@Screenshots(afterEachStep=true)
	@Given("^the todo application$")
	public void the_todo_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    a.initateDriver();
	}

	@When("^the todo action 'Digitize Supreme Power Collection' is added$")
	public void the_todo_action_Digitize_Supreme_Power_Collection_is_added() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    a.navigate();
	}

	@Then("^'Digitize Supreme Power Collection' should appear in the todo list$")
	public void digitize_Supreme_Power_Collection_should_appear_in_the_todo_list() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}
}
