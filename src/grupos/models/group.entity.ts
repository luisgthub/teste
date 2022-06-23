

import { Team } from "src/turma/models/team.entity";
import { User } from "src/usuario/models/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('group_')
export class Group {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @ManyToMany(()=>User,(user)=>user.group)
    @JoinTable({name:'groups_has_usuarios',
    joinColumn:{ name:'team_id',referencedColumnName:'id'},
    inverseJoinColumn:{name:'user_id',referencedColumnName:'id'}
    })

    users: User[];
//
    @ManyToMany(()=>Team,(team)=>team.group)
    teams:Team[];
}