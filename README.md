# todo-list
A typical todo list from scratch, full-stack with React, Redux, Thunk


## Build process
This is a step-by-step walkthrough of my thought process in building this web-app.

- [x] Starting with creating directories and loading dev dependencies
  - server: 
    - routes
    - db
  - client:
    - actions
    - reducers
    - components
    - containers
    - index.js
  - test
  - `yarn add` dependencies and devDependencies
  - config webpack
  - `.gitignore` node_modules and other files 
- [x] Add knex migration tables with dummy seed data
- [x] Basic database function and back end routes done for `getAllTodos`
- [x] Front end routes, actions and reducers to render todos on Home page
- [x] Deploy to Heroku
- [x] Configure and write db and routes tests
- [x] Impliment material UI for styling

## Features
To complete this project the todos will need to have the to features of CRUD

- [ ] Create/Add a todo
- [x] Read/ Display list of searchable todos 
- [ ] Update/ Complete or change a todo
- [ ] Delete/ delete the unwanted todo
