import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReqPostModule } from './req-post/req-post.module';
import { SettingPostModule } from './setting-post/setting-post.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'liun.db',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  }),
  ReqPostModule, SettingPostModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
