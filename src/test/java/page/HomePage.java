package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage {
Setup set=new Setup();
private WebDriver driver;
	public HomePage()
	{
		super();
	}
	public WebElement startDemo()
	{
		System.out.println(set.getDriver().getTitle());
		return set.getDriver().findElement(By.xpath("//a[@href='/startdemo/tms']"));
	}
//	public WebElement startDemo=Setup.getDriver().findElement(By.xpath("//a[@href='/startdemo/tms']"));
//	public WebElement trustedSign=Setup.getDriver().findElement(By.xpath("//h4[text()='TRUSTED SIGN']//ancestor::a[@href='#messagesign']"));
	
	
//	public void navigateToStartDemo()
//	{
//		startDemo.click();
//	}
}
