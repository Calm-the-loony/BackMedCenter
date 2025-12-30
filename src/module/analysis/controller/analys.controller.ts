import { Router } from "express";

class AnalysController {
    router: Router;

    constructor() {
        this.router = Router();
        this.initRoutes();
    }

    initRoutes() {
    }
}

export const analysisController = new AnalysController();