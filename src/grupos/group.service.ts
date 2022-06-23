import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Group } from './models/group.entity';

@Injectable()
export class GroupService extends AbstractService {
    constructor(
        @InjectRepository(Group)
        private readonly groupRepository:Repository<Group>
    ) {
        super(groupRepository)
    }

}
