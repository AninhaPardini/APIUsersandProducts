import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailIsSingle } from "../validation/single-email.validator";

export class CreatesUserDTO {
    
    
    @IsNotEmpty({ message: 'The Name cannot be empty'})
    @MinLength(5 ,{ message: 'I need to first and last name'})
    name: string;
    
    @IsEmail(undefined, {message: 'The email is invalid'})
    @EmailIsSingle({ message: 'It already exists user with this email'})
    @IsNotEmpty({ message: 'The Email cannot be empty'})
    email: string;

    @MinLength(6, { message: 'It is necessary a security password to minimum 6 characters'})
    @IsNotEmpty({ message: 'The Password cannot be empty'})
    password: string;    
}