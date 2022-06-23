import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { Group } from './models/group.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Group]),CommonModule],
    controllers: [GroupController],
    providers: [GroupService],
    exports:[GroupService]
})
export class GroupModule {}
