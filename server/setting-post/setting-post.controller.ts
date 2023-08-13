import { Body, Controller, Get, Post, Query, Delete } from '@nestjs/common';
import { SettingPostService } from './setting-post.service';
import { GetAllReq } from '../req-post/dto/req-post.dto';
import { PrePost } from './models/pre-post.entity';
import { DeleteResult } from 'typeorm';

@Controller('setting-post')
export class SettingPostController {

    constructor(private readonly settingPostService: SettingPostService) {}

    @Post("/get")
    async getPostByPage(@Body() getAllReq: GetAllReq): Promise<[PrePost[], number]> {
        return this.settingPostService.getPrePostByPage(getAllReq);
    }

    @Post("/set")
    async setPost(
        @Body() reqPost: PrePost
    ): Promise<{ success: boolean; message: string }> {
        return this.settingPostService.setPrePost(reqPost);
    }

    @Get('/get')
    async getAllPost(): Promise<PrePost[]> {
        return this.settingPostService.getAllPost();
    }

    @Get('/get/one')
    async getOneById(@Query('id') id:number): Promise<PrePost | null> {
        return this.settingPostService.findById(id)
    }

    @Delete('/delete/byid')
    async deletePost(@Query('id') id: number): Promise<DeleteResult> {
        return this.settingPostService.deletePost(id)
    }
}
