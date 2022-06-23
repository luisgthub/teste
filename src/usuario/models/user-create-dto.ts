import { IsEmail, IsNotEmpty } from "class-validator";
import { JoinColumn, OneToOne } from "typeorm";

export class UserCreateDto{
    @IsNotEmpty()
    first_name:string;
    
    @IsNotEmpty()
    last_name:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    role_id:number;

   
}