import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import { Adress } from "./Adress";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  weight: number;

  @Column()
  ethnicity: string;

  @Column()
  password: string;

  @OneToOne(() => Adress)
  adress: Adress;

}
