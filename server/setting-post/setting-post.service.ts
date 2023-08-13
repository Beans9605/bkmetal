import { Injectable, Logger } from "@nestjs/common";
import { GetAllReq } from "../req-post/dto/req-post.dto";
import { PrePostRepository } from "./repository/pre-post.repository";
import { PrePost } from "./models/pre-post.entity";
import { DeleteResult } from "typeorm";

@Injectable()
export class SettingPostService {
  private readonly logger = new Logger(SettingPostService.name);

  constructor(private readonly prePostRepository: PrePostRepository) {}

  async getPrePostByPage(getAllReq: GetAllReq) {
    const methodName = this.getPrePostByPage.name;

    this.logger.log(`[${methodName}] get prepost ${JSON.stringify(getAllReq)}`);
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
        message: "success save the post",
        data: result
      };
    });
  }

  async getAllPost(): Promise<PrePost[]> {
    return this.prePostRepository.find();
  }

  async findById(id: number): Promise<PrePost | null> {
    return this.prePostRepository.findOneBy({ id });
  }

  async deletePost(id: number): Promise<DeleteResult> {
    return this.prePostRepository.delete({ id });
  }
}
