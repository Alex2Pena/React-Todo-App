# React-Todo-App

### LAB 31 - Hooks API

*Write a React application that will be able to manage your personal To Do List*

**Requirements**
- Design your application with a header, main section, and a footer
- The overall styling is up to you
- The header should present the application title
- The main section must have:
    - A Form where the user can add a new item to the todo list
        - Items should have the following fields:
        - To Do Item Text
        - Assigned To
        - Status (complete/incomplete)
        - Difficulty (number between 1 and 5)
- The list of items in the to do list
    - Each item in list should show the text of the item as well as the assignee
    - When clicked, toggle the “complete” status of the item.
    - Items should be styled differently when complete/incomplete making their status visually obvious


**Implementation Notes/Details**
- Create separate components for each visual part of the application
    - Header
    - To Do List
    - Footer
- Each function must be a function component (no classes!)
- Use a useEffect() hook to change the title of the browser with the complete/incomplete counts

**Optional**
- Separate the Form and List display elements into separate components within a wrapper component
- Use the wrapper to hold the state and methods

**Stretch Goals**
Implement persistence with the live API to save data to the server
Start the application with the initial list of items pulled from the server
Use the useEffect() hook to call the API on the initial render to get data from the API
Update the list state with these items from the server
When you add a note, in addition to displaying it on screen, POST it to the API
When you change the status of a note, in addition to displaying it on screen, PUT that change to the API

**Testing**
Tests should assert all behavioral functionality

---

### LAB 32 - Custom Hooks

*Write a React application that will be able to manage your personal To Do List*

**Requirements**

- Design your application with a header, main section, and a footer
- The overall styling is up to you
- The header should present the application title

*The main section must have*
- A Form where the user can a new item to the todo list
- Items should have the following fields:
    - To Do Item Text
    - Assigned To
    - Status (complete/incomplete)
    - Difficulty (number between 1 and 5)
    - The list of items in the to do list
- Each item in list should show the text of the item as well as the assignee
- When clicked, toggle the “complete” status of the item.
- Items should be styled differently when complete/incomplete making their status visually obvious
- Items should have a delete button associated with them. When clicked, remove the item from the list

**Implementation Notes/Details**
- The application must be connected to a running API server
- On load, display all of the to do items from the database, including styling for their status
- When adding an item, issue a “POST” request to the API server
- When marking items complete, issue a “PUT” request to the API server for the item
- When deleting items, issue a “DELETE” request to the API server for the item
- Create separate components for each visual part of the application
    - Header
    - Footer
    - To Do List

- Each function must be a function component (no classes!)
- Use the useForm() hook to manage the “Add Item” form
- Create a new custom hook called useFetch() to abstract the API calls
- This hook should accept the URL to the API server, the REST method, and (when relevant) the BODY (JSON) of the request
- Additionally, your hook will likely have to handle CORS, Content-Type and possibly authentication

**Optional**
- Separate the Form and List display elements into separate components within a wrapper component
- Use the wrapper to hold the state and methods

**Resources**
- You will need a deployed API server to store your data
- Augment your API server from earlier in the course by adding the ‘todo’ collection
- You may connect to a shared API. We highly recommend using your own, however.

---

## LAB 33 - Context API

*Create a React application that wraps the entire <App/> with a context provider, created using Context API. Then, create multiple components that act as consumers to your context, using it in various ways.*

For this assignment, we’ll be using the Context API to add a few “settings” to the To Do application to make it work differently based on configuration.

**Requirements**
Design your application with a header, main section, and a footer
The overall styling is up to you
The header should present the application title

**The main section must have:**
- A Form where the user can a new item to the todo list
- Items should have the following fields:
    - To Do Item Text
    - Assigned To
    - Status (complete/incomplete)
    - Difficulty (number between 1 and 5)

- The list of items in the to do list
    - Each item in list should show the text of the item as well as the assignee
    - When clicked, toggle the “complete” status of the item.
    - Items should have a delete button associated with them
    - When clicked, remove the item from the list

- Based on configuration
    - Show a maximum of a certain number of items per screen
    - Hide completed items from the list OR display them (with a style that indicates their status)

**Implementation Notes/Details**

*Your application should be connected to a remote API*
- Create a context for managing application settings
- Display or Hide completed items (boolean)
- Number of items to display per screen (number)
- You may manually set (hard code) those state settings in the context provider 

**Pagination**
- Only display the first n items in the list, where n is the number to display per screen in your context.
- If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
- If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.
- Filter the completed items out of the list (or not) based on the appropriate setting in context.

**Testing**
- Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.
- Can they see context?
- Can they interact via published functions?

**Stretch Goal**
- Provide a “Settings” page for your users (Use Routing!)
- Allow the user to change the number change the context settings
- Your context will need to expose methods in state…
- Save their settings in local storage