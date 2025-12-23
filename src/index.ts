import express from "express";

import { apiConfig } from "../conf/apiConfig.js";
import { dbSource } from "./db/data-source.js";
import { authRouter } from "./module/auth/controller/authController.js";

const app = express();

app.use(express.json());

// Router's
app.use('/auth', authRouter);

dbSource.initialize().then(() => {
    app.listen(apiConfig.port, () => {
        console.log(`Listening on port: ${apiConfig.port}`);
    })
})