# Test backend application with Google cloud translation api

## How to install typescript to the project

- Run the following code to install typescript compiling and the types for the node and express

```shell
npm install --save-dev typescript ts-node @types/node @types/express

```

- Install the tsconfig.json file with the code below and configure ti

```shell
npx tsc --init
```

- To run the typescript code

```shell
npx ts-node src/server.ts

// with nodemon add the package.json dev script
"dev": "nodemon --watch src/**/*.ts --exec ts-node src/server.ts"

```
