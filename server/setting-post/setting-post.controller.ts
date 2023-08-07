import { Body, Controller, Post } from '@nestjs/common';
import { SettingPostService } from './setting-post.service';
import { GetAllReq } from '../req-post/dto/req-post.dto';
import { PrePost } from './models/pre-post.entity';

@Controller('setting-post')
export class SettingPostController {

    constructor(private readonly settingPostService: SettingPostService) {}

    @Post("/get")
    async getPostByPage(@Body() getAllReq: GetAllReq): Promise<PrePost[]> {
        return this.settingPostService.getPrePostByPage(getAllReq);
    }

    @Post("/set")
    async setPost(
        @Body() reqPost: PrePost
    ): Promise<{ success: boolean; message: string }> {
        return this.settingPostService.setPrePost(reqPost);
    }
}
