import { Repository } from "typeorm";
import { CustomRepository } from "../../util/custom.decorator";
import { ReqPost } from "../models/req-post.entity";

@CustomRepository(ReqPost)
export class ReqPostRepository extends Repository<ReqPost> {
    getPostByPage(
        pageNumber: number,
        rateByPage: number,
        searchType?: string,
        searchKeyword?: string
    ): Promise<ReqPost[]> {
        return this.createQueryBuilder("req_post")
            .where(`${searchType || 'company_name'} LIKE :searchKeyword`, { searchKeyword: `%${searchKeyword}%` })
            .take(rateByPage)
            .skip((pageNumber - 1) * rateByPage)
            .getMany();
    }
}
