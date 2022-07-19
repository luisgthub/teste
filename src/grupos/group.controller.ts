import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GroupService } from './group.service';
import { GroupDto } from './models/create-group-dto';
import { updateGroupDto } from './models/update-group-dto';

@Controller('groups')
//@UseInterceptors(ClassSerializerInterceptor)
export class GroupController {
    constructor(
        private groupService:GroupService,
        private jwtService:JwtService
    ) {}


    @Get()
    async all(@Query('page')page:number = 1){
        return await this.groupService.paginate(page,['teams','users']);
    }

    @Post('creategroup')
    async create(@Body() body:GroupDto,@Body('teams') @Body('users') ids:number[]) {
        const {user_id,team_id, ...data} = body;
        return this.groupService.create({
            ...data,
            teams:{id:team_id},
            users:{id:user_id}
            
        });
    }

    
@Get(':id')
async get(@Param('id') id:number) {
    
    
    return this.groupService.findOne({id},['teams','users'])
       
}

@Put(':id')
async update(
@Param('id') id:number,
@Body() body:updateGroupDto,
@Body('teams') ids:number[]
) {
    await this.groupService.update(id,{
    name:body.name,
    description:body.description
    })

    const activity = await this.groupService.findOne({id});


    return this.groupService.create({
      ...activity,
      teams: ids.map(id =>({id}))
      
})

}


    
@Delete(':id')
async delete(@Param('id') id:number) {
    return this.groupService.delete(id)
}    
}
