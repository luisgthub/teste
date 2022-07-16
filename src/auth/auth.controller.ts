/*
https://docs.nestjs.com/controllers#controllers
*/

import { BadRequestException, Body, ClassSerializerInterceptor, Controller,Res,Req, Get, NotFoundException, Post, UseGuards, UseInterceptors, Scope } from '@nestjs/common';
import { UserService } from 'src/usuario/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './models/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Response ,Request} from 'express';
import { AuthGuard } from './auth.guard';
import { Role } from 'src/funcao/role.entity';





@Controller()
//@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
    constructor(
        private userService:UserService,
        private jwtService:JwtService
    ) {}
    @Post('register')
    async register(@Body() body:RegisterDto) {
        if(body.password !== body.password_confirm){
            throw new BadRequestException('passwords do not match')
        }
        const hashed = await bcrypt.hash(body.password,12)
        const {role_id, ...data} = body;
        return this.userService.create({
            ...data,
            password:hashed,
            role:{id:role_id},
        });
    }

    @Post('login')
    async login(
    @Body('email') email:string,
    @Body('password') password:string,
    @Res({passthrough:true}) response:Response
    
    ) {
        const user = await this.userService.findOne({email});
            if(!user){
                throw new NotFoundException('user nao encontrado');
            }

            if(!await bcrypt.compare(password, user.password)){
            throw new BadRequestException('credenciais invalidas')
            }
            const jwt = await this.jwtService.signAsync({id:user.id});
            response.cookie('jwt',jwt,{httpOnly:true})
            return user;
        }

        @UseGuards(AuthGuard)
        @Get('user')
        async user(@Req() request:Request){
            const cookie =request.cookies['jwt'];
            const data = await this.jwtService.verifyAsync(cookie);
            return this.userService.findOne({id:data['id']}); 
        }

        @UseGuards(AuthGuard)
        @Post('logout')
        async logout(@Res({passthrough:true}) response:Response) {
            response.clearCookie('jwt')
            return{
                message:'sucess'
            }

        }        }
