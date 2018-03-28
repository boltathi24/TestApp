package page;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class log {

	private WebDriver driver;
	public void initateDriver()
	{
		File a=new File("src/libs/chromedriver.exe");
		String path=a.getAbsolutePath();
		System.setProperty("webdriver.chrome.driver", path);
		 
		// Initialize browser
		WebDriver driver=new ChromeDriver();
		 this.driver=driver;
		// Open facebook
		driver.get("http://www.facebook.com");


	}
	public WebDriver getDriver()
	{
		
		return this.driver;
	}
	
	public static void main(String[] args) {
		log ab=new log();
		ab.initateDriver();

	}
	
	public void navigate()
	{
		System.out.println("Navigating to Google");
		getDriver().navigate().to("https://www.google.com");
	}

}
