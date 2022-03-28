import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Roles } from '../roles/roles_entity';
import { Users } from '../users/user_entity';

@Entity()
export class Users_roles {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Users, users => users.user)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  users: Users_roles;

  @ManyToOne(type => Roles, roles => roles.role)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  role: Users_roles;
}