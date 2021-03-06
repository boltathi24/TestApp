package page;

import java.awt.AWTException;

import org.junit.Assert;


public class Navigation {
public Navigation()
{
	super();
}
	HomePage home = new HomePage();
	
	
	Login_SignUP_Page login_signUp = new Login_SignUP_Page();
	ActivationPage activate = new ActivationPage();
	Setup set=new Setup();

	public void navigate(String navigationLink) throws InterruptedException, AWTException {
		if (!navigationLink.equalsIgnoreCase("Start Demo")) {
			home.startDemo().click();
		}
		if (navigationLink.equalsIgnoreCase("Start Demo")) {
			home.startDemo().click();
			
		} 
			else if (navigationLink.equalsIgnoreCase("Privacy SignUp")) {
				login_signUp.signUpCheckBox().click();

		}  else if (navigationLink.equalsIgnoreCase("Login Help")) {
			login_signUp.helpLink().click();

		} else if (navigationLink.equalsIgnoreCase("Activate Create")) {
			login_signUp.helpLink().click();
			activate.createAccountLink().click();

		} else if (navigationLink.equalsIgnoreCase("Login switch OTP")) {
			login_signUp.switchLogin().click();

		} else if (navigationLink.equalsIgnoreCase("Login switch Sign")) {
			login_signUp.switchLogin().click();
			login_signUp.switchLogin().click();
		}
		else if(navigationLink.equalsIgnoreCase("Help in Trusted OTP"))
		{
			login_signUp.switchLogin().click();
			login_signUp.helpLink().click();
		}

	}
	
	public void navigateValidation(String expPageTitile) {
		
		
		
			String actualPageTitle=Setup.getDriver().getTitle();
			
			
			Assert.assertEquals(expPageTitile, actualPageTitle);
		
	}

}
