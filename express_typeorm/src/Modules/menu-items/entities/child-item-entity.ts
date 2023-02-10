import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { MenuItem } from './menu-item.entity';

@Entity()
export class ChildMenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  parentId: number;

  @Column()
  createdAt: Date;

  @ManyToOne(type => MenuItem, menuItem => menuItem.children)
  parent: MenuItem;
}