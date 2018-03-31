package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions
(features = "src/test/resources/",
plugin ={"pretty","html:cucumberReport/cucumber-html-report"},
glue= {"steps"},
tags= {"@Run"})
public class ActivationRunner {

}
