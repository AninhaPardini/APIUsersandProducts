<p align="center" display="flex"><a href="https://github.com/AninhaPardini" target="blank"><img src="https://avatars.githubusercontent.com/u/108814319?v=4" width="200" alt="Nest Logo" /></a>✏ Studies Notes to Alura course API in NestJS</p>

## Registering Users

- First Step: I created a file with name "user.controller.ts" and exported a class called "UserController" with decorator @Controller and parametrer "/users" for working in the function @Post with a return "user create!". As a result, I called the method inside my dependency module app.
- Test: I used Postman to create requests and exported a local:host and key at the @Controller with Raw inside Body format JSON.
  Second Step: In this step I added a parametrer "@Body() userDatas" for work to reply datas sending to my server and starting process registering objects users.
- Three Step: Default user repository method is used in the project for save user datas. I create class and added a private array method that will store my user datas, After this added a async function "save(user)" for sending datas to my array, currently empty. To finish I added a private element that save the instance new "UserRepository"

## Listing users

Created a new method @Get called "ListUsers" for create a sequence users in my database and add more informations, this return the function that collect users in my repository.

## Create user module

What I understand about module in NestJS: Is a tree conections of a category, with Controllers that define in the parametres how will interaction be HTML with the Database, and have the Imports when want extern datas inside database, the finally, the Providers that are the reponsible for the delivering datas for my database.

So, Create a file called "user.module.ts" that push informations and send to my module APP.

## Dependency Injection

Transformed my function UserRepository in a attribute injectable and created a constructor in my controller to use UserRepository parameters.

## Validations

Create DTO area for store and define the validation about my requisitions and a function that determine type and itens inside to recived user datas. Installed `npm install class-validator class-transformer`. After, I determined the type in my function "CreateUsers".

## Pipe configs

After the process validation I defined in my app config some parameters for my Global Pipes:

- 1. Transform: He will transform my data received to messages if you have something outside the validations that I specified.
- 2. Whitelist: Invalidations in the data won't accuse mistakes in my console.
- 3. forbidNonWhitelisted: Will go send the menssage if the data is invalid.

## Async Validation

For manage my database and block properties that i don't want to, I create a async function that search and block duplicate emails in different users. So, doing that a user don't create account with email that already exists in my database.

- 1. Validation Area: Create a folder for my validations, and a file for validate only emails.
- 2. Function that find: Create a async function inside <strong>User Repository</strong> that search an email in my database same as what was sent, and if it's not the same, return undefined.
- 3. Validation Action: Sync my search function in as a constant within the validator that when not return undefined, execute a message defined in DTO.
- 4. Decorator: In the finally, create a function that can used inside the DTO. In it I put properties for defined target, properties used, validation forms and what will be my validation method.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
