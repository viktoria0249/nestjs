import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Users_Roles } from '../users_roles/users_roles_entity';
import { User_Info } from '../user_info/user_info_entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  create_at: Date;

  @Column()
  delete_at: Date;

  @OneToMany(() => Users_Roles, (userRoles) => userRoles.users)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  user: Users[];

  @OneToMany(() => User_Info, (userInfo) => userInfo.infos)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  info: Users[];
}