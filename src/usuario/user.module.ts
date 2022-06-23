import { UserService } from './user.service';
import { UserController } from './user.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { CommonModule } from 'src/common/common.module';
import { UploadController } from './upload/upload.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    CommonModule],
    
    controllers: [
        UserController,UploadController],
    providers: [
        UserService,],
    exports:[UserService]
})
export class UserModule { }
