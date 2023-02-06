import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreatesUserDTO } from "./dto/createsUser.dto";
import { UserRepository } from "./user.repository";


@Controller('/users')
export class UserController {
    constructor(private readonly userRepository: UserRepository) {
        // readonly: do not subcribed.
        
    }
    
    @Post()        // The data captured to Body insede HTML
    async CreateUser(@Body() userDatas: CreatesUserDTO) {
        
        this.userRepository.save(userDatas)
        return userDatas
    }

    @Get()
    async ListUsers() {
        return this.userRepository.makeList()
    }
}