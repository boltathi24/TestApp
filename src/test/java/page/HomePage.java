package page;

import org.openqa.selenium.By;

import org.openqa.selenium.WebElement;

public class HomePage {


	public WebElement startDemo()
	{
		
		return Setup.getDriver().findElement(By.xpath("//a[@href='/startdemo/tms']"));
	}
	public WebElement trustedSign()
	{
		
		return Setup.getDriver().findElement(By.xpath("//h4[text()='TRUSTED SIGN']//ancestor::a[@href='#messagesign']"));
	}


	
	
	public void navigateToStartDemo()
	{
		startDemo().click();
	}
}
