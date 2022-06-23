import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'admin',
    password:'1010',
    database:'dbtest_',
    autoLoadEntities:true,
    entities:[__dirname + '/../**/*.entity.ts'],
    synchronize:true

}