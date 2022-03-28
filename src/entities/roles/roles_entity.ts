import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Users } from '../users/user_entity';
import { Users_roles } from '../users_roles/users_roles_entity';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


  @OneToMany(type => Users_roles, usersRoles => usersRoles.role)
  @JoinColumn({ name: 'id', referencedColumnName: 'role_id' })
  role: Roles[];

}