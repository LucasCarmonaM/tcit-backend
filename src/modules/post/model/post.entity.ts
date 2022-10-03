import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: string;

  @Column({
    unique: false,
  })
  readonly name: string;

  @Column({
    unique: false,
  })
  readonly description: string;

  constructor(postId: string, name: string, description: string) {
    this.id = postId;
    this.name = name;
    this.description = description;
  }
}
