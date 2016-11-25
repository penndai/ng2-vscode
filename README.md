# Angular2Hello
1. feature module --- seperate different features to single module
![Create different feature module](https://github.com/penndai/ng2-vscode/blob/master/screenshots/Todo.PNG "Seperate different modules")
2. custom route ---- root route, child route
   for each sub module, can contains its own route
![custom route for Hero List and Edit detail](https://github.com/penndai/ng2-vscode/blob/master/screenshots/custom-route.PNG "Custom route")
3. using 3rd party ng2-datatable component to display complicated table(nested detail table)
   But at the moment, ng2-datable component doesn't support detail table, in the template, ngFor or another table template NOT working,
   I already report the issue to the author, they are investigating now.
![nested table](https://github.com/penndai/ng2-vscode/blob/master/screenshots/nestedtable.PNG "Nested table")
4. Todo demo, add double click edit function
![todo item](https://github.com/penndai/ng2-vscode/blob/master/screenshots/Todo.PNG "Double click edit todo item")
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
