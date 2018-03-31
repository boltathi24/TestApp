package page;

import java.util.ArrayList;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class Navigation {
public Navigation()
{
	super();
}
	HomePage home = new HomePage();
	
	
	Login_SignUP_Page login_signUp = new Login_SignUP_Page();
	ActivationPage activate = new ActivationPage();
	Setup set=new Setup();

	public void navigate(String navigationLink) {
		if (!navigationLink.equalsIgnoreCase("Start Demo")) {
			home.startDemo().click();
		}
		if (navigationLink.equalsIgnoreCase("Start Demo")) {
			home.startDemo().click();
			
		} 
//			else if (navigationLink.equalsIgnoreCase("Privacy SignUp")) {
//			login_signUp.privacyLink.click();
//
//		} else if (navigationLink.equalsIgnoreCase("Privacy Activate")) {
//			login_signUp.helpLink.click();
//			activate.privacyLink.click();
//
//		} else if (navigationLink.equalsIgnoreCase("Login Help")) {
//			login_signUp.helpLink.click();
//
//		} else if (navigationLink.equalsIgnoreCase("Activate Create")) {
//			login_signUp.helpLink.click();
//			activate.createAccountLink.click();
//
//		} else if (navigationLink.equalsIgnoreCase("Login switch OTP")) {
//			login_signUp.switchLogin.click();
//
//		} else if (navigationLink.equalsIgnoreCase("Login switch Sign")) {
//			login_signUp.switchLogin.click();
//			login_signUp.switchLogin.click();
//		}

	}
	
	public void navigateValidation(String expPageTitile) {
		
		if(!expPageTitile.contains("Privacy"))
		{
			String actualPageTitle=set.getDriver().getTitle();
			System.out.println(actualPageTitle);
//			Assert.assertEquals(expPageTitile, actualPageTitle);
		}
		else
		{
			ArrayList<String> tabs = new ArrayList<String> (set.getDriver().getWindowHandles());
		    set.getDriver().switchTo().window(tabs.get(1));
			String actualPageTitle=set.getDriver().getTitle();
			System.out.println(actualPageTitle);
//			Assert.assertEquals(expPageTitile, actualPageTitle);
		    
		    
		}
	}

}
