
import { Group } from "src/grupos/models/group.entity";

import { User } from "src/usuario/models/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('teams')
export class Team  {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at;
    
    @ManyToMany(()=>User,(user)=>user.teams)
    @JoinTable({name:'turmas_has_users',
    joinColumn:{ name:'team_id',referencedColumnName:'id'},
    inverseJoinColumn:{name:'user_id',referencedColumnName:'id'}
    })

    users: User[];

    @ManyToMany(()=>Group,(group)=>group.teams)
    @JoinTable({name:'team_has_groups',
    joinColumn:{ name:'team_id',referencedColumnName:'id'},
    inverseJoinColumn:{name:'group_id',referencedColumnName:'id'}
    })

    group: Group[];

}