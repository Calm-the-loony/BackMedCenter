import { Router } from "express";
import type { Request, Response } from "express";

import { AnalysisService } from "@/module/analysis/service/AnalysisService";
import { Analysis } from "@/module/analysis/dto/Analysis.dto";

class AnalysController {
  router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  initRoutes() {
    this.router.get("/list", AnalysController.allAnalysis);
  }

  static async allAnalysis(req: Request, res: Response) {
    /*
      #swagger.method = 'GET'
      #swagger.tags = ['Analysis']
      #swagger.summary = 'Получение списка анализов'
      #swagger.description = 'Получение списка всех анализов с количеством'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']

      #swagger.parameters['body'] = {
        in: 'body',
        description: 'Фильтры для получения анализов',
        required: false,
        schema: {
          $ref: "#/definitions/AnalysFilters"
        }
      }

      #swagger.responses[200] = {
        schema: {
          $ref: '#/definitions/AnalysisList'
        }
      }
    */

    const filters: Pick<Analysis, "type" | "costs" | "status"> = req.body;
    const allAnalysis = await AnalysisService.getList(filters);
    return res
      .status(200)
      .json({ list: allAnalysis[0], totalCount: allAnalysis[1] });
  }
}

export const analysisController = new AnalysController();
