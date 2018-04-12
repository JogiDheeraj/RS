# Frontend

This project Angular 5 project

## Development server

Run `yarn start` for a dev server. 
Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Build

Run `mvn install` to build the project. 
The build artifacts will be stored in the `dist/META-INF/resources` directory. 
After the build SUCCEED the a JAR file will be created in `target` directory.

## Running unit tests


Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io) with out watch or code coverage.
Run `yarn test-watch` to execute the unit tests with watch and code coverage.

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code scaffolding
Run `ng generate component components/[component-name] --skip-import` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

After generating the new component, please import the component in `src/spp/module/app.module.ts`  and add it to the declarations section.


