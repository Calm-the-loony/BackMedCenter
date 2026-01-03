import { Repository } from "typeorm";

import { dbSource } from "@/db/data-source";
import { ReviewEntity } from "@/module/services";

export class ReviewService {

  protected static reviewRepository: Repository<ReviewEntity> = dbSource.getRepository(ReviewEntity);

}