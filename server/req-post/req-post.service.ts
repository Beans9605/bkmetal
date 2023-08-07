import { Injectable } from "@nestjs/common";
import { ReqPostRepository } from "./repository/req-post.repository";
import { GetAllReq } from "./dto/req-post.dto";
import { ReqPost } from "./models/req-post.entity";

@Injectable()
export class ReqPostService {
    constructor(private readonly reqPostRepository: ReqPostRepository) {}

    async getPostByPage(getAllReq: GetAllReq) {
        return this.reqPostRepository.getPostByPage(
            getAllReq.pageNumber,
            getAllReq.rateByPage,
            getAllReq.searchType,
            getAllReq.searchKeyword
        );
    }

    async setPost(reqPost: ReqPost) {
        return await this.reqPostRepository.save(reqPost).then((result) => {
            return {
                success: true,
                message: 'success save the post'
            }
        })
    }
}
