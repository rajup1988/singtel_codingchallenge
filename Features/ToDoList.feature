Feature: Verify ToDo Functionality

Scenario: Create ToDoList

		Given user opens the url
		Then  user creates the todo list
		  | ToDoList1 |
		  | ToDoList2 |
		  | ToDoList3 |
		  | ToDoList4 |
		And  verify the todo list count "4"
		  
Scenario: Verify ToDoList Active Button
	    Then  user selects the todo list item
	      | ToDoList3 |
	    And  verify the todo list count "3"
	    Then  user clicks on the Active button
	    And  verify the todo list item
	      | ToDoList1 |
		  | ToDoList2 |
		  | ToDoList4 |
		And  verify the todo list item not present
		  | ToDoList3 |
		  
Scenario: Verify ToDoList All Button
	    Then  user clicks on the All button
	    And  verify the todo list item
	      | ToDoList1 |
		  | ToDoList2 |
		  | ToDoList3 |
		  | ToDoList4 |
		  
Scenario: Verify ToDoList Completed Button
	   Then  user clicks on the Completed button
	   And  verify the todo list item
		  | ToDoList3 |
	   And  verify the todo list item not present
	      | ToDoList1 |
		  | ToDoList2 |
		  | ToDoList4 |
		  

Scenario: Verify ToDoList Clear Completed Button
	   Then  user clicks on the Clear Completed button
	   Then  user clicks on the All button
	   And  verify the todo list item
	      | ToDoList1 |
		  | ToDoList2 |
		  | ToDoList4 |
	   Then  user clicks on the Completed button
	   And  verify the todo list item not present
		  | ToDoList3 |
		  | ToDoList1 |
		  | ToDoList2 |
		  | ToDoList4 |
	   Then  user clicks on the Active button
	   And  verify the todo list item
	      | ToDoList1 |
		  | ToDoList2 |
		  | ToDoList4 |
	
@CloseAllBrowsers		 
Scenario: Verify ToDoList clear by using destroy
	   Then  user removes the todo list item
	     | ToDoList1 |
	   Then  user clicks on the All button
	   And  verify the todo list count "2"
	   And  verify the todo list item
		  | ToDoList2 |
		  | ToDoList4 |
	   Then  user clicks on the Completed button
	   And  verify the todo list item not present
		  | ToDoList3 |
		  | ToDoList1 |
		  | ToDoList2 |
		  | ToDoList4 |
	   Then  user clicks on the Active button
	   And  verify the todo list item
		  | ToDoList2 |
		  | ToDoList4 |
