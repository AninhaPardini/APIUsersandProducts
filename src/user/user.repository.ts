/* interface User {
    name: string,
    email: string,
    senha: string,
} */

import { Injectable } from "@nestjs/common/decorators";

@Injectable() /* A Injeção de dependências é um mecanismo que faz muito uso dos conceitos do SOLID, principalmente do princípio D, de Dependency Inversion, em que uma classe deveria depender de uma interface comum, sendo que qualquer objeto que implemente essa interface é um objeto aceitável para uso na classe onde ele foi inserido. */
export class UserRepository {
    
    private users/* : User[] */ = []; // any é usado antes para tipar o array como qualquer coisa e é necessário pois sem ele o array se torna tipo never.

    async save(user/* : User */) {
        this.users.push(user);
        /* for(const item of this.users) {
            console.log(item.name)
        } */
        /* console.log(this.users) */

    }

    async makeList() {
        return this.users;
    }
}