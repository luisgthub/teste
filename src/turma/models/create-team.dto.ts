import {IsEmail, IsNotEmpty, IsOptional} from 'class-validator'
export class createTeamDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    description:string;

    created_at:Date;

    @IsOptional()
    points:number;

}