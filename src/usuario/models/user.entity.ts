import { Options } from "@nestjs/common";
import { Exclude } from "class-transformer";

import { Group } from "src/grupos/models/group.entity";
import { Role } from "src/funcao/role.entity";
import { Team } from "src/turma/models/team.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { group } from "console";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    first_name:string;

    @Column()
    last_name:string;

    @Column({unique:true})
    email:string;

    @Column()
    @Exclude()
    password:string;

    @ManyToOne(()=>Role,role => role.user)
    @JoinColumn({name:'role_id',referencedColumnName:'id'})
    role:Role;


    @ManyToMany(()=>Team,(team)=>team.users)
    teams:Team[];
    
 

    @ManyToMany(()=>Group,(group)=>group.users)
    group:Group[];

   
}