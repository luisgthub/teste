import {IsEmail, IsNotEmpty} from 'class-validator'
export class updateTeamDto {
    
    name?:string;

    
    description?:string;

    
    created_at?:Date;

    points?:number;

}