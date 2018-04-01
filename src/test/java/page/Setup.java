package page;

import java.io.File;
import java.util.Arrays;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;






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
		ChromeOptions cOptions = new ChromeOptions();
	    cOptions.addArguments("test-type");
	    cOptions.addArguments("start-maximized");
	    cOptions.addArguments("--js-flags=--expose-gc");  
	    cOptions.addArguments("--enable-precise-memory-info"); 
	    cOptions.addArguments("--disable-popup-blocking");
	    cOptions.addArguments("--disable-default-apps"); 
	    cOptions.setExperimentalOption("excludeSwitches", Arrays.asList("enable-automation"));
	    cOptions.addArguments("disable-infobars");
		WebDriver driver = new ChromeDriver(cOptions);

		Setup.driver=driver;
		 

	}
	public static WebDriver getDriver()
	{
		
		
		return driver;
		
	}


	public void navigateToApp() throws Throwable {
	getDriver().navigate().to("https://mast2.kobil.com/");
	getDriver().manage().window().maximize();
	
}

	
}
