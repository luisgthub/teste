import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './permission.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Permission])],
    controllers: [
        PermissionController,],
    providers: [
        PermissionService,],
})
export class PermissionModule { }
