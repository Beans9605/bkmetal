import { Repository } from 'typeorm'
import { CustomRepository } from '../../util/custom.decorator'
import { PrePost } from '../models/pre-post.entity'

@CustomRepository(PrePost)
export class PrePostRepository extends Repository<PrePost> {
    getPostByPage(
        pageNumber: number,
        rateByPage: number,
        searchType?: string,
        searchKeyword?: string
    ): Promise<[PrePost[], number]> {
        return this.createQueryBuilder("pre_post")
            .where(`${searchType || 'item_type'} LIKE :searchKeyword`, { searchKeyword: `%${searchKeyword}%` })
            .take(rateByPage)
            .skip(pageNumber * rateByPage)
            .getManyAndCount();
    }
}