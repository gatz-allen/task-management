# Guide how to setup and run locally
1. On either git bash or visual studio code via powershell terminal, Pull/Clone the project on GIT via either https or SSH on <> Code
2. Once cloned, run `npm install` to install all dependencies first.
3. Once done on step 2, run `npm start`
4. To run local server via NodeJS, open another powershell terminal and run comman `node src/server/app.js`
5. The app should now be operatable

# References
* Data for users can be found on src/server/db/users.json
* Data for task list can be found on src/server/db/task.json

# Features covered on asssessment
1. Authentication
    a. Users should be able to Sign Up using their email.
    b. Users should be able to Login.
2. Create a Task
    a. A task should have the status of Todo, In Progress, Completed.
    b. Users should be able to create a new task that will be marked as Todo by default.
3. Edit Task
    a. Users should be able to update tasks.
4. Remove Task
    a. Users should be able to move the task to trash if it’s deleted.
5. Task List
    a. Users should be able to view task lists.
    
# Technical Requirements used
1. React Frameworks:  CRA
2. Microservices Architecture.
3. Code Management: Github repo for code checking.