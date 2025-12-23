import { Router, type Request, type Response } from "express";

import { UserService } from '../../users/service/user.service.js';
import { User } from "../../users/dto/User.dto.js";

export const authRouter = Router();

authRouter.post("/register", async (req: Request, res: Response) => {
    const userData: User = req.body;
    const newUser = await UserService.createUser(userData);
    if (newUser) {
        return res.status(201).json({'message': 'Пользователь был зарегистрирован'});
    }
});