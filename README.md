# RESTAPI

Smoke Test Cases:
===============
***************
- TC: Verify the creation of a Story under a Project 
	* Verify Iteration Name
	* Verify backlog field, in this case is a Project type
	* Verify the Iteration state (N, I, P and so on)
	* Verify the due date
	* Verify the owner

- TC: Verify the Creation of a Iteration # under a Project
	* Verify the Iteration name
	* Verify the project that this Iteration belongs 
	* Verify the start and date
	* Verify the Owner

- TC: Verify the creation of a task under a story
	* Verify the task name
	* Verify the date creation
	* verfiy the status by default is "No started"

Sanity test cases:
=================
*****************
- TC: Verify that a Story can be started as "Started"
	* Verify the Story shows as Started status


- TC: Verify task is marked as done 
	* Set as Done a specific task

- TC: Verify that a Report is generated based on Iteration
	* Verify the report is generated to Excel file from an Iteration

- TC: Verify that a report is generated in the same page

- TC: Verify that a task can be removed


CRUD test cases:
===============
***************
- TC3: Verify the creation of a Project under a Product already created (CREATE)
	* Verify the Project name
	* Verify the Product that this Project belongs
	* Verify the start Date
	* Verify the end Date
	* Verify the Owner

- TC: Verify that a Story created can be showed on Iteration panel (READ)
	* Verify the Story properties are correctly showed

- TC: Verify the a Project properties can be updated (UPDATE)
	* Verify the Project name was changed
	* Verify the Product was changed
	* Verify the start Date was changed
	* Verify the end Date was changed
	* Verify the Owner was changed to other owner

- TC2: Verify that a Product can be deleted (DELETE)
	* Verify the Product no longer exist on web

Negative Test cases:
===================
*******************
- TC: Create an iteration with empty name
	* Try to enter an empty name for iteration 

- TC: Enter estimation time for story  with negative values
	* Try to enter negative values on estimation fields

- TC: Create an task with not allowed special characters as name
	* Try to enter not allowed characters for the task

- TC: Verify the change password functionality works as expeted when entering more than 100 characters as new passsword value

- TC: Enter special characters in filter filed for Stories
	* Verify the special characters does not break anything on story list

Boundary test cases:
===================
*******************
- TC: Create a task with more than 200 charatses

- TC: Verify the Story points is not being negative values

- TC: 


Security Test Cases:
===================
*******************
- TC: Verify log in over HTTPS channel (https://...)
	* Verify that once logged in, the URL must be over HTTPS

- TC: Verify the password field is masked (******) while entering the password

- TC: Verify the change Password functionality work as expected
	* Once changed the new password, the next time the user should be logged in with his new password

- TC: Verify login is not allowed with empty password
	* Try to log in with empty password

- TC: Verify the User Password should not be stored in cookies
	* Once signed in, verify the user password is not stored on cookie data

- TC: Avoid SQL injection
	* Try to login with a password like: mypass', or 'mypass' something like that.


Aditionla TCS:
=============
*************

- TC1: Verify the creation of a Product
	* Verify the product name
	* Verify the Description


- TC3: Verify that the estimation (spend time) can be updated on Product
	* Verify the effort time updated (added)
	* Verify the effort time was deleted

- TC4: Verify that stories all that belong to this Product are listed
	* Verify the stories are listed at Product pane

- TC5: Verify that several Products can be created (Product 1, Product 2 and son on)
	* Verify the Products are created and listed under BackLog tab





- TC4: Verify that a Project can be deleted
	* Verify the Project no longer exist on web

- TC3: Verify that the estimation (spend time) can be updated on Project
	* Verify the effort time updated (added)
	* Verify the effort time was deleted

- TC4: Verify that Iterations all that belong to this Project are listed
	* Verify the Iterations are listed at Project pane

- TC4: Verify that stories all that belong to this Project are listed
	* Verify the stories are listed at Project pane

- TC: Verify that several Projects can be created (Project 1, Project 2 and son on)
	* Verify the Projects are created and listed under a Product




- TC: Verify the Creation of a standalone Iteration #
	* Verify the Iteration name
	* Verify the project field is EMPTY
	* Verify the start and date
	* Verify the Owner

- TC: Verify that a Iteration # can be deleted
	* Verify the Iteration no longer exist on web

- TC4: Verify that Stories all that belong to this Iterations are listed
	* Verify the Iterations are listed at Project pane

- TC3: Verify that the estimation (spend time) can be updated on Iterations
	* Verify the effort time updated (added)
	* Verify the effort time was deleted

- TC3: Verify that the Iteration can be exported to Excel file
	* Verify the Excel file is saved and opened properly

- TC3: Verify that the stories can be filtered based on their status
	* Verify the filter creation based on story status
	* Verify the stories are filtered based on above filter

- TC: Verify that several Iterations can be created (Iteration 1, Iteration 2 and son on)
	* Verify the Iterations are listed under a Project 
	

- TC: Verify the story status can be changed (In progress, Blocked, Done a dn so on) based on the current progress 
	* Verify the story's status: In progress, Blocked, Done, Deferred.


- TC: Verify the number of tasks showed under this story
	* Verify the task column information 

- 
- TC: Verify that several Stories can be created (Story 1, Story 2 and son on)
	* Verify the Stories are listed under the Iteration


Task level******************:

- TC: Verify the creation of a task without a story
- TC: Verify that a Product can be deleted

- TC: Verify that several Tasks can be created (Task 1, Task 2 and son on)
	* Verify the rasks are listed under the Iteration
