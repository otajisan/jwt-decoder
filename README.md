# jwt-decoder
Simple JWT Decoder (using [jwt-decode](https://www.npmjs.com/package/jwt-decode))

## Usage

```bash
npm run decode aaa <JWT_TOKEN>
```
or
```bash
npx ts-node src/index.ts <JWT_TOKEN>
```

## Testing

```bash
npm run test
```
or
```bash
npx jest
```

## How to create this project?

```bash
npm init
npm i -D typescript tslint @types/node
volta pin node@16.15.0
volta pin npm@8.5.5

npx tsc --init

# Lint
npm i -D eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Testing
npm i -D jest ts-jest @types/jest
npm i -D babel-jest @babel/core @babel/preset-env
npm i -D @babel/preset-typescript
npx jest --init
npm i -S ts-node
```

## JWT Decode lib

```bash
npm i jwt-decode
```

## JWT for testing

```bash
npm i -S jsonwebtoken
npm i -D @types/jsonwebtoken
```

## References
- [Configuration Babel](https://babeljs.io/docs/en/configuration)
- [Jest - Getting started](https://jestjs.io/ja/docs/getting-started)
