# todo-list
A typical todo list from scratch, full-stack with React, Redux, Thunk


## Build process
This is a step-by-step walkthrough of my thought process in building this web-app.

1 Starting with creating loading dev dependencies
  - `mkdir` server - routes
                   - db
            client - actions
                   - reducers
                   - components
                   - containers
                   - index.js
  - `yarn add` dependencies and devDependencies
  - config webpack
  - `.gitignore` node_modules and other files
- Add knex migration tables with dummy seed data
- Basic database function and back end routes done for `getAllTodos`
