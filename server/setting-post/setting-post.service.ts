import { Injectable, Logger } from '@nestjs/common';
import { GetAllReq } from '../req-post/dto/req-post.dto';
import { PrePostRepository } from './repository/pre-post.repository';
import { PrePost } from './models/pre-post.entity';

@Injectable()
export class SettingPostService {

    private readonly logger = new Logger(SettingPostService.name)

    constructor(private readonly prePostRepository: PrePostRepository) {}

    async getPrePostByPage(getAllReq: GetAllReq) {

        const methodName = this.getPrePostByPage.name

        this.logger.log(`[${methodName}] get prepost ${JSON.stringify(getAllReq)}`)
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
