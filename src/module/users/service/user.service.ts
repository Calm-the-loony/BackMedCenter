import { Repository } from "typeorm";

import { dbSource } from '../../../db/data-source.js';
import { User } from "../entity/User.entity.js";
import { User as UserDTO } from "../dto/User.dto.js"


export class UserService {

    protected static repository: Repository<User> = dbSource.getRepository(User);

    static async createUser(userData: UserDTO): Promise<User> {
        const repository: Repository<User> = dbSource.getRepository(User);
        const newUser = await repository.create(userData);
        return await repository.save(newUser);
    }

    static async getUserByEmail(email: string) {
        const user = await this.repository.findOne({ where: { email } });
        return user;
    }
}