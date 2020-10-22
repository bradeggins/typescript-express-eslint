# typescript-express-eslint

## Usage
`git clone <repo>`

`npm install`

`tsc` <-Typescript in `/src` compliles into `'./server'`

`cd server`

`node server.js`

`http://localhost:3000`

## Typescript - Express and Linting

### TS Type Definitions for Express

`npm i -D @types/express` <- TS definitions for express
https://www.npmjs.com/package/@types/express

### Linting

eslint-typescript -> eslint support for Typescript - good Docs for setup, very popular

https://www.npmjs.com/package/@typescript-eslint/eslint-plugin

https://github.com/typescript-eslint/typescript-eslint

https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md

https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md

https://github.com/mysticatea/eslint-plugin-node#readme <- Eslint plugin for node best practices


### Alternatives
Standardx - standardjs standard with support for TS
TSLint was available but has been deprecated in support of eslint-typescript

### Debugging TS and Node

**Browser/Client Side**

Debugger for chrome extension for Vscode allows you to run JS in browser and debug in TS in Vscode

**Node**

VSCODE  - Inbuilt support - A source map allows you to debug in TS while running JS.

Tsconfig.json -> “sourceMap”: true
https://code.visualstudio.com/docs/typescript/typescript-debugging

https://code.visualstudio.com/docs/typescript/typescript-tutorial
 
### CheatSheets/Reference

https://app.pluralsight.com/library/courses/typescript-projects-configuring-compiling-debugging/table-of-contents <- Good quick intro 32mins

https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
https://github.com/microsoft/TypeScript-Node-Starter
