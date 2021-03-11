import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Adress {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  adress: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  zipcode: string;

  @Column()
  city: string;

  @Column()
  estate: string;

}
