import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { verifyToken } from "@/utils/other/jwt.js";

export async function authMiddleware(req: Request & JwtPayload, res: Response, next: NextFunction) {
    const userData = await verifyToken((req.headers?.authorization ?? "").split('Bearer ')[1] as string, 'access');

    if (userData) {
        req.token = userData;
        return next();
    }

    return res.status(401).send({ message: 'Не удалось аутентифицировать пользователя' });
}