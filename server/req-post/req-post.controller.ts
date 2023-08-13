import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ReqPostService } from "./req-post.service";
import { GetAllReq } from "./dto/req-post.dto";
import { ReqPost } from "./models/req-post.entity";

@Controller("req-post")
export class ReqPostController {
    constructor(private readonly reqPostService: ReqPostService) {}

    @Post("/get")
    async getPostByPage(@Body() getAllReq: GetAllReq): Promise<[ReqPost[], number]> {
        return this.reqPostService.getPostByPage(getAllReq);
    }

    @Post("/set")
    async setPost(
        @Body() reqPost: ReqPost
    ): Promise<{ success: boolean; message: string }> {
        return this.reqPostService.setPost(reqPost);
    }

    @Get('/get')
    async getAllPost(): Promise<ReqPost[]> {
        return this.getAllPost()
    }

    @Get('/get/one')
    async getOneById(@Query('id') id: number): Promise<ReqPost | null> {
        return this.reqPostService.findById(id);
    }
}
