package page;

import java.awt.AWTException;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import net.serenitybdd.core.annotations.findby.By;

public class Login_SignUP_Page {
	ActivationPage a=new ActivationPage();
	
	

	public WebElement signUpEmailTxtBox()
	{
		
		return Setup.getDriver().findElement(By.xpath("//div[@class='create-content']/parent::*//input[@name='userId']"));
	}
	public WebElement signUpCheckBox() throws AWTException, InterruptedException
	{
		
		
		return Setup.getDriver().findElement(By.xpath("//span[@id='recaptcha-anchor']/div[@class='recaptcha-checkbox-checkmark']"));
	}
	public WebElement captchaExpirationMessage()
	{
		
		return Setup.getDriver().findElement(By.xpath("//div[@class='rc-anchor-error-msg-container']/span"));
	}
	public WebElement signUpButton()
	{
		
		return Setup.getDriver().findElement(By.xpath("//button[@class='button login-button ']"));
	}
	public WebElement loginButton()
	{
		
		return Setup.getDriver().findElement(By.xpath("//button[@class='button login-button login-button']"));
	}
	public WebElement creationSuccessfulMessage()
	{
		
		return Setup.getDriver().findElement(By.xpath("//div[@class='create-content']/h4"));
	}
	public WebElement errorMessage()
	{
		
		return Setup.getDriver().findElement(By.xpath("//p[@class='form-error-message']"));
	}
	
	public WebElement helpLink()
	{
		
		return Setup.getDriver().findElement(By.xpath("//a[contains(text(),'Help')]"));
	}
	public WebElement loginEmailTextBox()
	{
		
		return Setup.getDriver().findElement(By.xpath("//h3[@class='form-title']//ancestor::div[2]//input"));
	}
	public WebElement switchLogin()
	{
		
		return Setup.getDriver().findElement(By.xpath("//a[contains(text(),'Switch')]"));
	}
	
	public void signUp(String email,String condition)
	{
		if(condition.equalsIgnoreCase("Captcha Not Checked"))
		{
			signUpEmailTxtBox().sendKeys(email);
			signUpButton().click();
		}
		else if(condition.equalsIgnoreCase("Invalid Email Trusted Sign"))
		{
			loginEmailTextBox().sendKeys(email);
			loginButton().click();
			
		}
		else if(condition.equalsIgnoreCase("Invalid Email Trusted OTP"))
		{
			switchLogin().click();
			loginEmailTextBox().sendKeys(email);
			loginButton().click();
			
		}
		else if(condition.equalsIgnoreCase("Captacha Not checked Activate"))
		{
			helpLink().click();
			a.getActivationEmailTextBox().sendKeys(email);
			a.activateButton().click();
			
			
		}
	
	}
	
	public void validateError(String expected)
	{
		String actualError=errorMessage().getText();
		System.out.println(actualError);
		Assert.assertEquals(expected, actualError);
	}
	
	
}
