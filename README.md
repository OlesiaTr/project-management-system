# Project Management System

## Description of function blocks

### Welcome page(route)

- The welcome page should display general information about the developer, project, and course.
- In the upper right corner should be present 2 buttons Login and Sign up
- If there is an unexpired token, the user should be redirected to the "Main route" of the application automatically.
- When the token expires - the user should be redirected to the "Welcome page" automatically.
- Pressing the Login / Sign up button redirects the user to the route with the Login / Sign up form automatically.

### Header

- There are buttons in the header for authenticated users: edit profile, logout, create new board, and localization switcher.
- Edit profile should redirect the user to a route with a form for edit profile. The requirements for the form are the same as for all forms in the application. There should be a 'Delete User' button. In case of this action should be shown as a "confirmation modal" then the user should be logged out, and the user should be removed from the database.
- Create a new board - opens a modal window with a form for creating a board. Requirements for the form are the same as for all forms in the application.

### Footer

- footer should contain a link to the author's github, the year the application was created, [course logo](https://rs.school/images/rs_school_js.svg) with [link to the course](https://rs.school/angular/).
- footer is displayed on all pages of the application.

### Login / Sign up

- Form fields should be implemented in consistency with the backend API of the application. Validation should be implemented.
- Errors from the BE side - (Not found, unhandled rejection, etc) should be displayed in a user-friendly format (toast, pop-up, or something like this - up to your decision).
- Upon successful login, the user should be redirected to the "Main route"

### Main route

- Displays all created boards as a list.
- Boards are displayed with a small preview of the available information (title). By clicking on the element, the user redirects to the board item (Board route). There should be a button to remove the board.
- When a user tries to delete the board, he/she should receive a confirmation modal to verify if the user wants to delete the board (to avoid deleting the board by mistake). The confirmation modal should be a generic component (one for the application).
- global search (optional): search for a task by task number, name, users assigned to it, and by the text of the task description.

### Board route

- There should be a button to create a column.
- If there is at least one column on the board, you should display the task creation button.
- To create a column and a task, you should display a form in the modal window.
- Requirements for the modal window and forms are described before.
- A task cannot be standalone and should be always bound to a column.
- The user can create multiple columns. The user can create an unlimited number of tasks. When overflowing with the number of tasks of the column - display scroll inside the column.
- If all columns do not fit on the screen, the page may have a horizontal scroll.
- The user can swap columns using drag-n-drop.
- The user can change the order of tasks columns using drag-n-drop.
- The user changes the belonging of the task to the column using drag-n-drop.
- ❗ It is recommended to use the existing library to implement the drag-n-drop functionality ❗.
- By clicking on the task, you should open a modal window with the edit task form. The requirements for the form and window are the same everywhere.
- There should be a 'delete task' button on the task. By clicking the 'delete task' the confirmation modal should be displayed, only after a user confirms the deletion - delete the task.
- At the top of the column should be displayed the title. When you click on it, it should convert text into input, there should be 'cancel' and 'submit' buttons to the left of input. After entering text in the input and clicking submit - the title of the column should be updated with the entered text.
- The column should have a 'delete column' button. Clicking on 'delete column' should open the confirmation modal, only after the user confirms the deleting - delete the column.
- ATTENTION! Deleting a column removes the tasks associated with it from the BD automatically.
- There should be a "back" button to return to the main route

## Evaluation criteria

**Maximum available points for the task 620**

## Check criteria

### Welcome route - max 70 points

- [ ] The welcome page should contain general information about the developer, project, and course. **10 points**
- [ ] In the upper right corner there are 2 buttons: login and sign up. **10 points**
- [ ] If there is an unexpired token, the user should be redirected to the "Main route" of the application automatically. **20 points**
- [ ] When the token expires - the user should be redirected to the "Welcome page" automatically. **20 points**
- [ ] Pressing the Login / Sign up button redirects a user to the route with the Login / Sign up form. **10 points**

### Login / Sign up - max 80 points

- [ ] Login/log out should be present on all pages **20 points**
- [ ] Form fields should be implemented according to the backend API. Validation should be implemented. **50 points**
- [ ] Upon successful login, the user should be redirected to "Main route" **10 points**

### Main route - max 100 points

- [ ] Board creation functionality **20 points**
- [ ] Displays all created boards as a list **10 points**
- [ ] Each board in the list is displayed with a small preview of available information (title, description, etc). By clicking an element the user navigates to the board item (Board route). There's also a button for board deletion. **10 points**
- [ ] When trying to delete the board, we should receive a confirmation modal. The confirmation modal must be a generic component (one for the entire application). **10 points**
- [ ] Global search: search for a task by a task number, name, users who participate in it, and by the text of the task description. **20 points**
- [ ] The user profile editing functionality is implemented. **30 points**

### Board route - max 260 points

- [ ] Button for column creation is displayed **10 points**
- [ ] If a board contains at least one column - a button for task creation is displayed as well **10 points**
- [ ] A modal window with form is displayed for column and task creation **30 points**
- [ ] A vertical scrollbar is displayed in the column when overflowing with the number of column tasks **20 points**
- [ ] The page itself on the current route doesn't have a vertical scrollbar **10 points**
- [ ] With the help of drag-n-drop, we can swap columns. **30 points**
- [ ] With the help of drag-n-drop, we can change the order of tasks within a column. **30 points**
- [ ] With the help of drag-n-drop, we can change the task belonging to the column. **50 points**
- [ ] by clicking on the task, we open a modal window with the edit task form. The requirements for the form and window are the same as everywhere else. **30 points**
- [ ] The task must have a delete task button. On click: confirmation modal -> delete. **10 points**
- [ ] The top of a column should always display the column title. By clicking the title the test should turn into a form with cancel and submit buttons. After typing a text into the input and clicking the submit button the tile of the column should be updated. **20 points**
- [ ] The column should have a delete button. By clicking -> confirmation modal -> when approving -> deleting. **10 points**

### General requirements - max 80 points

- [ ] Backend error handling - (Not found, unhandled rejection, etc) should be performed in a user-friendly way (toast, pop-up or anything else you implement). **50 points**
- [ ] Localization **20 points**
- [ ] Backend is deployed and publicly available **10 points**

### Additiona functionality - 30 points

- [ ] Implemented additional functionality that is not provided for by current requirements **30 points**

### Penalties

- [ ] The presence of errors and warnings in the console **- 20 points**
- [ ] The presence in the console of the results of the console.log execution - **- 20 points**
- [ ] Making commits after the deadline - **- 100 points**
