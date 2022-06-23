import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserModule } from 'src/usuario/user.module';
import { CommonModule } from 'src/common/common.module';


@Module({
    imports: [
        UserModule,
        CommonModule,
],
    controllers: [
        AuthController,],
    providers: [],
})
export class AuthModule { }
