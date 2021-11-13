import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Users_Roles } from '../users_roles/users_roles_entity';

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Users_Roles, (userRoles) => userRoles.roles)
    @JoinColumn({ name: 'id', referencedColumnName: 'role_id' })
    role: Roles[];
}