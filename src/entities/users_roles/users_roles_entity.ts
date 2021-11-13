import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Roles } from '../roles/roles_entity';
import { Users } from '../users/user_entity';

@Entity()
export class Users_Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Users, (users) => users.user)
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    users: Users_Roles;

    @ManyToOne(() => Roles, (roles) => roles.role)
    @JoinColumn({name: 'role_id', referencedColumnName: 'id'})
    roles: Users_Roles;
    
}