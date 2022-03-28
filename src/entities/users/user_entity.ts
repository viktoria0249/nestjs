import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Users_roles } from '../users_roles/users_roles_entity';
import { User_Info } from '../user_info/user_info_entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @OneToMany(type => Users_roles, userRoles => userRoles.users)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  user: Users[];

  @OneToMany(type => User_Info, userInfo => userInfo.infos)
  @JoinColumn({ name: 'id', referencedColumnName: 'uder_id' })
  info: Users[];
}