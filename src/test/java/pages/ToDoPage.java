package pages;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import support.ActionDriver;

public class ToDoPage  extends ActionDriver{
	
public WebDriver driver;
	
	@FindBy(css=".new-todo")
	WebElement todoTextField;
	
	@FindBy(css=".todo-count > strong")
	WebElement todoListCount;
	
	@FindBy(css=".todo-list > li > div")
	List<WebElement> todoListTable;
	
	@FindBy(xpath="//a[text()='All']")
	WebElement todoListTable_All_Button;
	
	@FindBy(xpath="//a[text()='Active']")
	WebElement todoListTable_Active_Button;
	
	@FindBy(xpath="//a[text()='Completed']")
	WebElement todoListTable_Completed_Button;
	
	@FindBy(css=".clear-completed")
	WebElement todoListTable_Clear_Completed_Button;

	
	
	public ToDoPage(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	/**
	 * This method is used to enter the text in the Your Name Text field
	 * @param textToEnter desired text to enter
	 */
	public void enterTodoText(String textToEnter) {
		type(todoTextField, textToEnter);
		pressEnter(todoTextField);
	}
	
	public void verifyTodoListCount(String count)
	{
		int countFromUI = Integer.parseInt(getText(todoListCount));
		Assert.assertEquals(countFromUI, Integer.parseInt(count));
	}
	
	public void selectToDoListItem(String text)
	{
		for(WebElement e:todoListTable)
		{
			String todoText = e.findElement(By.tagName("label")).getText();
			if(todoText.equals(text))
			{
				e.findElement(By.tagName("input")).click();
			}
		}
	}
	
	public void clearToDoListItem(String text) throws InterruptedException
	{
		for(WebElement e:todoListTable)
		{
			String todoText = e.findElement(By.tagName("label")).getText();
			if(todoText.equals(text))
			{
				//e.findElement(By.tagName("input")).click();
				Actions hover = new Actions(driver);
				hover.moveToElement(e.findElement(By.tagName("input"))).build().perform();
				Thread.sleep(500);
				e.findElement(By.tagName("button")).click();
			}
		}
	}
	
	public void clickAllButton()
	{
		click(todoListTable_All_Button);
	}
	
	public void clickActiveButton()
	{
		click(todoListTable_Active_Button);
	}
	
	public void clickCompletedButton()
	{
		click(todoListTable_Completed_Button);
	}
	
	public void clickClearCompletedButton()
	{
		click(todoListTable_Clear_Completed_Button);
	}
	
	public void verifyToDoListItem(String text)
	{
		boolean flag = false;
		for(WebElement e:todoListTable)
		{
			String todoText = e.findElement(By.tagName("label")).getText();
			if(todoText.equals(text))
			{
				flag = true;
				break;
			}
		}
		Assert.assertTrue(text +" is NOT Present!", flag);
	}
	
	public void verifyToDoListItemNotPresent(String text)
	{
		boolean flag = true;
		for(WebElement e:todoListTable)
		{
			String todoText = e.findElement(By.tagName("label")).getText();
			if(todoText.equals(text))
			{
				flag = false;
				break;
			}
		}
		Assert.assertTrue(text +" is Present!", flag);
	}

}
