package page;


import org.openqa.selenium.WebElement;

import net.serenitybdd.core.annotations.findby.By;

public class ActivationPage {

	public WebElement createAccountLink()
	{
		
		return Setup.getDriver().findElement(By.xpath("//a[contains(text(),'Create')]"));
	}
	public WebElement errorMessage()
	{
		
		return Setup.getDriver().findElement(By.xpath("//p[@class='form-error-message']"));
	}
	public WebElement activateButton()
	{
		
		return Setup.getDriver().findElement(By.xpath("//button[contains(text(),'Activate')]"));
	}
	public WebElement privacyLink()
	{
		
		return Setup.getDriver().findElement(By.xpath("//a[contains(text(),'Privacy')]"));
	}
	public WebElement getActivationEmailTextBox()
	{
		
		return Setup.getDriver().findElement(By.xpath("//button[@class='button login-button login-button']"));
	}
	

}
