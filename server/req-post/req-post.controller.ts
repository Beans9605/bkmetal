import { Body, Controller, Post } from "@nestjs/common";
import { ReqPostService } from "./req-post.service";
import { GetAllReq } from "./dto/req-post.dto";
import { ReqPost } from "./models/req-post.entity";

@Controller("req-post")
export class ReqPostController {
    constructor(private readonly reqPostService: ReqPostService) {}

    @Post("/get")
    async getPostByPage(@Body() getAllReq: GetAllReq): Promise<ReqPost[]> {
        return this.reqPostService.getPostByPage(getAllReq);
    }

    @Post("/set")
    async setPost(
        @Body() reqPost: ReqPost
    ): Promise<{ success: boolean; message: string }> {
        return this.reqPostService.setPost(reqPost);
    }
}
