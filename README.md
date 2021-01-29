# FileReaderApp

The objective of this SPA (single page Application) is to find out the Error, Exception and Info from the Log file and provide the user the cause of the Errors by using (File-Reader-App) SPA.

**Key feature and Functions:

In Angular It will used File API where it will use File Reader, Buffer Array and many libraries and function to read, parse, modified and store the data. Once the data is parsed will use to store data in Array in function and while calling it.
It is needed to use Angular material module to access all the features and functionality. Here we’ve used following modules and services:
•	BrowserModule, Ngmodule and FormsModule. (for Animation and communicate with native DOM elements)
•	AppRoutingModule (for Routing)
•	JavaScript/TypeScript (for code)

# Note: It is must imported all the modules and services while using Angular material otherwise it will simply show error messages or not execute the program.

**Key benefits, savings using the asset:  

Using this SPA will take the file from the client side and then parse the file by using FileReader and store it to Array. In this SPA have some function and it will use the Array data to as input:
Input file: it will take file as a input from user.
Find Error: it will parse the data extract the line which contain the Error and simply display at the client side.
Find Exception: it will parse the data and extract the line which contains the Exception and display at client side.
Refresh: it will Refresh the browser.  
Search: it will take any keywords/words as input which want to search in file, If it is present it file it will display at client side.




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
