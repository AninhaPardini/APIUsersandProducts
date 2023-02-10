import { Injectable } from "@nestjs/common/decorators";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class SingleEmail implements ValidatorConstraintInterface{
    constructor(private userRepository: UserRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userExist = await this.userRepository.emailExist(value)
        return !userExist;
    }
    
}

export const EmailIsSingle = (validationOptions: ValidationOptions) => {

    return (object: Object, properties: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: properties,
            options: validationOptions,
            constraints: [],
            validator: SingleEmail
        })
    }
}