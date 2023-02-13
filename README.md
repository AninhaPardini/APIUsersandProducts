<p align="center" ><a href="https://github.com/AninhaPardini" text target="blank"  ><img src="https://avatars.githubusercontent.com/u/108814319?v=4" width="200" border-radius="50" alt="Aninha Pardini"  /></a></p>
<h1 align="center" display="block">✏ Studies Notes to Alura course API in NestJS</h1>

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

1. Transform: He will transform my data received to messages if you have something outside the validations that I specified.
2. Whitelist: Invalidations in the data won't accuse mistakes in my console.
3. forbidNonWhitelisted: Will go send the menssage if the data is invalid.

## Async Validation

For manage my database and block properties that i don't want to, I create a async function that search and block duplicate emails in different users. So, doing that a user don't create account with email that already exists in my database.

1. Validation Area: Create a folder for my validations, and a file for validate only emails.
2. Function that find: Create a async function inside <strong>User Repository</strong> that search an email in my database same as what was sent, and if it's not the same, return undefined.
3. Validation Action: Sync my search function in as a constant within the validator that when not return undefined, execute a message defined in DTO.
4. Decorator: In the finally, create a function that can used inside the DTO. In it I put properties for defined target, properties used, validation forms and what will be my validation method.

## The User Entity

1. Create a new file in user area called "user.entity" and create a new class with this name and transformed in a type for to quote that now my user repository is a User Entity array type.
2. Started the remodeling in User Controller, first step was install uuid and yours dependences, after create a new instance calling the class UserEntity and rename my userDatas for userEntity, and changed the display when a user was created.

## Create a listing DTO

After create a User Entity and make changes, i need change my list so that not all user datas is shown in the API. For that create a new class called "userlist" in my DTO area, and make a constructor with the datas id and name, with that, i went to @Get and did treatment of the array where it will only return me the id and name of the created user.

Nest is [MIT licensed](LICENSE).
