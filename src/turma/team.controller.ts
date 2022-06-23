
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createTeamDto } from './models/create-team.dto';
import { updateTeamDto } from './models/update-team.dto';
import { TeamService } from './team.service';


    @Controller('teams')
    //@UseInterceptors(ClassSerializerInterceptor)
    export class TeamController {
        constructor(
            private teamService:TeamService,
            private jwtService:JwtService
        ) {}


        @Get()
        async all(@Query('page')page:number = 1){
            return await this.teamService.paginate(page,[]);
        }

        @Post('createteam')
        async create(@Body() body:createTeamDto,@Body('users') ids:number[]) {
    
            return this.teamService.create({
                name:body.name,
                description:body.description,
                created_at:body.created_at,
                users:ids.map(id=>({id}))
                
            });
        }

        
    @Get(':id')
    async get(@Param('id') id:number) {
        return this.teamService.findOne({id},['users'])
}

@Put(':id')
async update(
    @Param('id') id:number,
    @Body() body:updateTeamDto,
    @Body('users') ids:number[]
    ) {
        await this.teamService.update(id,{
        name:body.name,
        description:body.description,
        created_at:body.created_at,
        
        })

        const team = await this.teamService.findOne({id});

        return this.teamService.create({
          ...team,
          users: ids.map(id =>({id}))
          
    })
}

    
        
    @Delete(':id')
    async delete(@Param('id') id:number) {
        return this.teamService.delete(id)
    }    
 }
