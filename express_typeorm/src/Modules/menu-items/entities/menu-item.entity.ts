import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ChildMenuItem } from './child-item-entity';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ nullable: true })
  parentId: number;

  @Column()
  createdAt: Date;

  @OneToMany(type => MenuItem, (childMenuItem: { parent: any; }) => childMenuItem.parent)
  children: MenuItem[];
}