package support;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ActionDriver{
	
	
	public void openURL(WebDriver driver, String url)
	{
		driver.get(url);
	}
	
	
	/**
	 * This method is used to click on the link
	 * @param element locator to perform the action
	 */
	public void click(WebElement element)
	{
		try {
			element.click();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * This method is used to verify the Selected episode header
	 * @param driver driver instance
	 * @param locator desired locator to perform the action
	 */
	public void click(WebDriver driver, String locator)
	{
		By by= By.xpath(locator);
		waitTillElementVisible(driver, by);
		click(driver.findElement(by));
	}
	
	/**
	 * This method is used to enter the text in Text field
	 * @param element element locator
	 * @param text desired text to enter
	 */
	public void type(WebElement element, String text)
	{
		element.clear();
		element.sendKeys(text);
	}
	
	/**
	 * This method is used to get the text from the UI
	 * @param element element locator
	 */
	public String getText(WebElement element)
	{
		return element.getText();
	}

	/**
	 * This method is used to wait till the element visible
	 * @param driver WebDriver instance
	 * @param element element locator
	 */
	public void waitTillElementVisible(WebDriver driver, WebElement element)
	{
		WebDriverWait wait = new WebDriverWait(driver, Long.parseLong(Constants.PAGELOAD_TIMEOUT));
		wait.until(ExpectedConditions.elementToBeClickable(element));
	}
	
	/**
	 * This method is used to wait till the element visible
	 * @param driver WebDriver instance
	 * @param by element locator
	 */
	public void waitTillElementVisible(WebDriver driver, By by)
	{
		WebDriverWait wait = new WebDriverWait(driver, Long.parseLong(Constants.PAGELOAD_TIMEOUT));
		wait.until(ExpectedConditions.visibilityOfElementLocated(by));
	}
	
	/**
	 * This method is used to get the title of the page
	 * @param driver WebDriver instance
	 * @return title of the page
	 */
	public String getTitle(WebDriver driver)
	{
		return driver.getTitle();
	}
	
	public void pressEnter(WebElement ele)
	{
		ele.sendKeys(Keys.RETURN);
	}
	
	
}
