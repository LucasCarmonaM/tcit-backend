import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly userId: string;

  @Column({
    unique: false,
  })
  readonly name: string;

  @Column({
    unique: true,
  })
  readonly email: string;

  constructor(userId: string, name: string, email: string) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    console.log('User create for ' + this.name);
  }
}
