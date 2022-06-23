import { TeamController } from './team.controller';
import { TeamService } from './team.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Team } from './models/team.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';

@Module({
    imports: [TypeOrmModule.forFeature([Team]),CommonModule],
    controllers: [
        TeamController,],
    providers: [
        TeamService,],
  exports:[TeamService]
})
export class TeamModule { }
