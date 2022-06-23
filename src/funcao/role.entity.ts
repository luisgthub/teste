import { Permission } from "src/permissao/permission.entity";
import { User } from "src/usuario/models/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @OneToMany(() => User, user => user.role)
    user: User;

    @ManyToMany(()=>Permission,{cascade:true})
    @JoinTable({name:'role_has_permissions',
    joinColumn:{ name:'role_id',referencedColumnName:'id'},
    inverseJoinColumn:{name:'permission_id',referencedColumnName:'id'}
    })
    permissions: Permission[];
}