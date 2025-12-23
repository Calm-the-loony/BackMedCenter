import express from "express";

import { apiConfig } from "../conf/apiConfig.js";
import { dbSource } from "./db/data-source.js";

const app = express();

dbSource.initialize().then(() => {
    app.listen(apiConfig.port, () => {
        console.log(`Listening on port: ${apiConfig.port}`);
    })
})