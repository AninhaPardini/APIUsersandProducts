
import { Injectable } from "@nestjs/common/decorators";
import { UserEntity } from "./user.entity";

@Injectable() /*     A Injeção de dependências é um mecanismo que faz muito uso dos conceitos do SOLID, principalmente do princípio D, de Dependency Inversion, em que uma classe deveria depender de uma interface comum, sendo que qualquer objeto que implemente essa interface é um objeto aceitável para uso na classe onde ele foi inserido. */
export class UserRepository {
    
    private users: UserEntity[] = []; 

    async save(user: UserEntity) {
        this.users.push(user);
        /* for(const item of this.users) {
            console.log(item.name)
        } */
        /* console.log(this.users) */

    }

    async makeList() {
        return this.users;
    }

    async emailExist(email: string) {
        const possibleUser = this.users.find( user => user.email === email
            );
        return possibleUser !== undefined;
    }
}