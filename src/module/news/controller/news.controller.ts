import { Router } from "express";
import type { Request, Response } from "express";

import { News } from "@/module/news/dto/News.dto.js";
import { NewsService } from "@/module/news/service/NewsService.js";
import { authMiddleware } from "@/utils/middlewares/authMiddleware.js";
import { JwtPayload } from "jsonwebtoken";

export const newsRouter = Router();

newsRouter.post('/create', authMiddleware, async (req: Request & JwtPayload, res: Response) => {
    const newsData: News = req.body;
    const newsIsCreated = await NewsService.createNews(newsData, req?.token);

    if (newsIsCreated) {
        return res.status(201).send({ message: 'Новость была создана' });
    }

    return res.status(400).send({ message: 'Не удалось создать новость' });
})