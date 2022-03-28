import { ConflictException } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Users } from '../users/user_entity';

@Entity()
export class User_Info {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  patronymic: string;

  @ManyToOne( type=> Users, users=> users.info)
  @JoinColumn({name: 'user_id',referencedColumnName: 'id'})
  infos: User_Info; 
}