import {IsNotEmpty, IsOptional} from 'class-validator'
export class GroupDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    description:string;

    @IsOptional()
    points:number;
    
    @IsOptional()
    xp:number;

    @IsNotEmpty()
    user_id:number;

    @IsNotEmpty()
    team_id:number;
 
 
}