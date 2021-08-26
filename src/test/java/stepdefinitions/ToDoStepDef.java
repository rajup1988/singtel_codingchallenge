package stepdefinitions;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.ToDoPage;
import support.Constants;
import support.DriverBase;

public class ToDoStepDef  extends DriverBase{
	
	
	ToDoPage tdp = null;
	
	
	@Before
	public void before()
	{
    	launchBrowser();
    	tdp = new ToDoPage(driver); 
	}
	@Given("^user opens the url$")
	public void user_opens_the_url() throws Throwable {
		tdp.openURL(driver, Constants.URL);
	}
	
	@Then("^user creates the todo list$")
	public void user_enters_the_todo_text(DataTable data) throws Throwable {
		for(List<String> l: data.raw())
		{
			tdp.enterTodoText(l.get(0));
			Thread.sleep(2000);
		}
	}
	
	@And("^verify the todo list count \"([^\"]*)\"$")
	public void verfiy_todo_list_count(String arg1) throws Throwable {
		tdp.verifyTodoListCount(arg1);
	}
	
	@Then("^user selects the todo list item$")
	public void user_selects_the_todo_text(DataTable data) throws Throwable {
		for(List<String> l: data.raw())
		{
			tdp.selectToDoListItem(l.get(0));
			Thread.sleep(1000);
		}
	}
	
	@Then("^user clicks on the All button$")
	public void user_clicks_all_button() throws Throwable {
		tdp.clickAllButton();
	}
	
	@Then("^user clicks on the Active button$")
	public void user_clicks_active_button() throws Throwable {
		tdp.clickActiveButton();
	}
	
	@Then("^user clicks on the Completed button$")
	public void user_clicks_completed_button() throws Throwable {
		tdp.clickCompletedButton();
	}
	
	@Then("^user clicks on the Clear Completed button$")
	public void user_clicks_clear_completed_button() throws Throwable {
		tdp.clickClearCompletedButton();
	}
	
	@And("^verify the todo list item$")
	public void verify_the_todo_text(DataTable data) throws Throwable {
		for(List<String> l: data.raw())
		{
			tdp.verifyToDoListItem(l.get(0));
		}
	}
	
	@And("^verify the todo list item not present$")
	public void verify_the_todo_text_not_present(DataTable data) throws Throwable {
		for(List<String> l: data.raw())
		{
			tdp.verifyToDoListItemNotPresent(l.get(0));
		}
	}
	
	@Then("^user removes the todo list item$")
	public void user_removes_the_todo_text(DataTable data) throws Throwable {
		for(List<String> l: data.raw())
		{
			tdp.clearToDoListItem(l.get(0));
			Thread.sleep(1000);
		}
	}

	@cucumber.api.java.After("@CloseAllBrowsers")
	public void quitBrowsers() throws InterruptedException {
		Thread.sleep(5000);
		tearDown();
	}
}
