export class CreateUserDto {
    login: string;
    password: string;
    create_at: Date;
    delete_at: Date;
}

export class UpdateUserDto {
    login: string;
    password: string;
    create_at: Date;
    delete_at: Date;
}
