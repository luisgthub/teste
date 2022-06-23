/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Team } from './models/team.entity';


@Injectable()
export class TeamService extends AbstractService{
    constructor(
        @InjectRepository(Team) private readonly teamRepository:Repository<Team>
    ) {
        super(teamRepository)
    }
    
}
