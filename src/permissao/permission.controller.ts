/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { Permission } from './permission.entity';
import { PermissionService } from './permission.service';

@Controller('permissions')
export class PermissionController {
    constructor(private permissionService:PermissionService) {}
    @Get()
    async all() {
        return this.permissionService.all();
    }

    @Post()
    async create(
        @Body('name') name:string,
    ): Promise<Permission> {
        return this.permissionService.create({
            name
        });
    }
}
