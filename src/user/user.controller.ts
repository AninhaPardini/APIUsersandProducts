import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreatesUserDTO } from "./dto/createsUser.dto";
import { UserEntity } from "./user.entity";
import { UserRepository } from "./user.repository";
import { v4 as uuid } from 'uuid';
import { UserListDTO } from "./dto/userlist.dto";

@Controller('/users')
export class UserController {
    constructor(private readonly userRepository: UserRepository) {
        // readonly: do not subcribed.
        
    }
    
    @Post()        // The data captured to Body insede HTML
    async CreateUser(@Body() userDatas: CreatesUserDTO) {
        const userEntity = new UserEntity();
        userEntity.email = userDatas.email;
        userEntity.password = userDatas.password;
        userEntity.name = userDatas.name;
        userEntity.id = uuid();

        this.userRepository.save(userEntity);

        return { user: new UserListDTO(userEntity.id, userEntity.name), message: 'Susseful in creating a user' }
    }

    @Get()
    async ListUsers() {
        
        
        const savedUsers = await this.userRepository.makeList()
        const userList = savedUsers.map( user => new UserListDTO(user.id, user.name));

        return userList;

    }
}