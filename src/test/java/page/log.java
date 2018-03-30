package page;

import java.io.File;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;





public class log {

	private WebDriver driver;
	public log()
	{
		File a=new File("src/libs/chromedriver.exe");
		String path=a.getAbsolutePath();
		System.setProperty("webdriver.chrome.driver", path);
		 
		// Initialize browser
		WebDriver driver=new ChromeDriver();
		 this.driver=driver;

	}
	public WebDriver getDriver()
	{
		
		return this.driver;
	}
	
	public void redirect(String AppName)
	{
		getDriver().findElement(By.xpath("//h4[contains(text(),'"+AppName+"')]//ancestor::a")).click();
		WebElement a=getDriver().findElement(By.xpath("//h2[contains(text(),'"+AppName+"')]/parent::*/a"));
		JavascriptExecutor executor = (JavascriptExecutor) getDriver();
		executor.executeScript("arguments[0].click();", a);
	}
	
public void navigateToApp() {
	getDriver().navigate().to("https://mast2.kobil.com/");
}
public void validateRedirect(String expPageTitle)
{
	String pageTitile=getDriver().getTitle();
	System.out.println(pageTitile);
	Assert.assertEquals(expPageTitle, pageTitile);
	getDriver().quit();
}
	
	
}
