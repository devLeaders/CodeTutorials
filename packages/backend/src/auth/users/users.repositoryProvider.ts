import { Connection } from "typeorm";
import { UsersRepository } from "./user.repository";

export const UsersRepositoryProvider = {
    provide: 'UsersRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(UsersRepository),
    inject: [Connection],
};