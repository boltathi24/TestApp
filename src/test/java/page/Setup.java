package page;

import java.io.File;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.PageObject;






public class Setup {

	private static WebDriver driver=null;
	public Setup()
	{
		super();
	}
	public void SetupDriver()
	{
		File a=new File("src/libs/chromedriver.exe");
		String path=a.getAbsolutePath();
		System.setProperty("webdriver.chrome.driver", path);
		 
		// Initialize browser
		WebDriver driver=new ChromeDriver();
		Setup.driver=driver;
		 

	}
	public static WebDriver getDriver()
	{
		
		
		return driver;
		
	}


	public void navigateToApp() throws Throwable {
	getDriver().navigate().to("https://mast2.kobil.com/");
	
}

	
}
