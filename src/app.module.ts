import { GroupModule } from './grupos/group.module';
import { GroupController } from './grupos/group.controller';
import { GroupService } from './grupos/group.service';


import { TeamModule } from './turma/team.module';


import { PermissionModule } from './permissao/permission.module';
import { RoleModule } from './funcao/role.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './usuario/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm-config';


@Module({
  imports: [
    GroupModule,

    TeamModule,

 
    PermissionModule,
    RoleModule,
    CommonModule,
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [
    
  ],
  providers: [
   

  ],
})
export class AppModule { }
