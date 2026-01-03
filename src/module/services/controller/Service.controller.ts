import { Router, Request, Response } from 'express';
import { authMiddleware } from "@/utils";
import { ClinicType, ClinicTypeService } from "@/module/services";
import { uploadIcons } from "@/utils/fileManager/storage";
import { isAdminMiddleware } from "@/utils/middlewares/adminMiddleware";

class ServiceController {

  router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  initRoutes() {
    this.router.post('/clinic/create', authMiddleware, isAdminMiddleware, uploadIcons, (req: Request, res: Response) => {
      /*
        #swagger.method = 'POST'
        #swagger.tags = ['Clinic']
        #swagger.summary = 'Созданий нового типа услуг'
        #swagger.description = 'Добавление нового типа услуг'
        #swagger.produces = 'application/json'
        #swagger.consumes = 'multipart/form-data'

        #swagger.parameters['name'] = {
          in: 'formData',
          type: 'string',
          required: true,
          description: 'Название типа'
        }
        #swagger.parameters['icon'] = {
          in: 'formData',
          type: 'file',
          required: true,
          description: 'Иконка типа'
        }

        #swagger.responses[201] = {
          description: 'Новый тип услуг был зарегистирован',
          schema: {
            $ref: '#/definitions/Message'
          }
        }
        #swagger.responses[400] = {
          description: 'Не удалось создать новый тип услуг',
          schema: {
            $ref: '#/definitions/Message'
          }
        }
      */

      return ServiceController.createClinic(req, res);
    });
    this.router.post('/consult/create', (req: Request, res: Response) => {
    });
    this.router.post('/review/create', (req: Request, res: Response) => {
    });
    this.router.post('/attendance/create', (req: Request, res: Response) => {
    })
  }

  static async createClinic(req: Request, res: Response) {
    const clinicTypeData: ClinicType = { ...req.body, icon: req.file?.filename };
    const clinicTypeIsCreated = await ClinicTypeService.create(clinicTypeData);

    if (clinicTypeIsCreated) {
      return res.status(201).json({ message: 'Новый тип услуг был зарегистирован' });
    }

    return res.status(400).json({ message: 'Не удалось создать новый тип услуг' });
  }
}

export const serviceController = new ServiceController();