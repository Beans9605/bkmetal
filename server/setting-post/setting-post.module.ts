import { Module } from "@nestjs/common";
import { SettingPostController } from "./setting-post.controller";
import { SettingPostService } from "./setting-post.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PrePost } from "./models/pre-post.entity";
import { CustomTypeOrmModule } from "../util/custom.module";
import { PrePostRepository } from "./repository/pre-post.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([PrePost]),
        CustomTypeOrmModule.forCustomRepository([PrePostRepository]),
    ],
    controllers: [SettingPostController],
    providers: [SettingPostService],
})
export class SettingPostModule {}
