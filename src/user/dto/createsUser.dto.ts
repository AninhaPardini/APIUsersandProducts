import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreatesUserDTO {
    
    
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @MinLength(6)
    @IsNotEmpty()
    password: string;    
}