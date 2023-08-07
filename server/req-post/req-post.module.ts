import { Module } from '@nestjs/common';
import { ReqPostController } from './req-post.controller';
import { ReqPostService } from './req-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from '../util/custom.module';
import { ReqPostRepository } from './repository/req-post.repository';
import { ReqPost } from './models/req-post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReqPost]),
    CustomTypeOrmModule.forCustomRepository([ReqPostRepository]),
],
  controllers: [ReqPostController],
  providers: [ReqPostService]
})
export class ReqPostModule {}
