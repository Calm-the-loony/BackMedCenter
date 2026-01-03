import { Repository } from "typeorm";

import { dbSource } from "@/db/data-source";
import { Consult } from "@/module/services";

export class ConsultService {

  protected static consultRepository: Repository<Consult> = dbSource.getRepository(Consult);

}