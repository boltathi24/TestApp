package page;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import net.serenitybdd.core.annotations.findby.By;

public class ValidateUI {
	HomePage h=new HomePage();
	ActivationPage a=new ActivationPage();
	Login_SignUP_Page l=new Login_SignUP_Page();
	String feature=null;
	
	public void navigateToFeature(String feature) {
		this.feature=feature;
		if(feature.contains("Trusted OTP"))
		{
			l.switchLogin().click();
			
		}
		else if(feature.contains("Activa"))
		{
			l.helpLink().click();
		}
		else if(feature.contains("Home"))
		{
			Setup.getDriver().navigate().back();
		}
	}

	public void validateUI(String hyperLink, String txtBox, String button) {
		String actualHyperLink="N";
		String actualTxt="N";
		String actualButton="N";
	
		List<WebElement> actualButtons=Setup.getDriver().findElements(By.xpath("//button"));
		List<WebElement> actualHyperLinks=Setup.getDriver().findElements(By.xpath("//a"));
		List<WebElement> actualTxtBox=Setup.getDriver().findElements(By.xpath("//input/following-sibling::label"));
		
		for(WebElement a:actualButtons)
		{
			System.out.println(a.getText());
			if(a.getText().contains(button))
			{
				actualButton="Y";
			}
				
		}
		if(!feature.contains("Home"))
{
		for(WebElement b:actualHyperLinks)
		{
			if(b.getText().contains(hyperLink))
			{
				actualHyperLink="Y";
			}
				
		}
		for(WebElement c:actualTxtBox)
		{
			if(c.getText().contains(txtBox))
			{
				actualTxt="Y";
			}
				
		}
		
		Assert.assertEquals("Y", actualHyperLink);
		Assert.assertEquals("Y", actualTxt);
}
		Assert.assertEquals("Y", actualButton);

		
	}

}
