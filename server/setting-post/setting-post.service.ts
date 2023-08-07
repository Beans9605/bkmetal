import { Injectable } from '@nestjs/common';
import { GetAllReq } from '../req-post/dto/req-post.dto';
import { PrePostRepository } from './repository/pre-post.repository';
import { PrePost } from './models/pre-post.entity';

@Injectable()
export class SettingPostService {
    constructor(private readonly prePostRepository: PrePostRepository) {}

    async getPrePostByPage(getAllReq: GetAllReq) {
        return this.prePostRepository.getPostByPage(
            getAllReq.pageNumber,
            getAllReq.rateByPage,
            getAllReq.searchType,
            getAllReq.searchKeyword
        );
    }

    async setPrePost(prePost: PrePost) {
        return await this.prePostRepository.save(prePost).then((result) => {
            return {
                success: true,
                message: 'success save the post'
            }
        })
    }
}
