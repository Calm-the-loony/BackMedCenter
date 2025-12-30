import express from "express";
import swaggerUI from "swagger-ui-express";
import { join, resolve } from "node:path";
import { createRequire } from "node:module";

import { apiConfig } from "@/conf/apiConfig.js";
import { dbSource } from "@/db/data-source.js";
import {postAuthMiddleware} from "@/utils/middlewares/authMiddleware.js";

import { authRouter } from "@/module/auth/controller/auth.controller.js";
import { newsRouter } from "@/module/news/controller/news.controller.js";
import { userRouter } from "@/module/users/controller/user.controller.js";
import { pacientsRouter } from "@/module/pacients/controller/pacients.controller.js";
import { analysRouter } from "@/module/analysis/controller/analys.controller.js";

const require = createRequire(import.meta.url);
const app = express();

app.use(express.json());
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(require(join(resolve(), "swagger.json"))),
);

// Router's
app.use("/auth", authRouter);
app.use('/news', newsRouter);
app.use('/users', userRouter);
app.use('/analys', analysRouter);
app.use('/pacients', pacientsRouter);

// Post middlewarees
app.use(postAuthMiddleware);

dbSource.initialize().then(() => {
}).finally(() => {
  app.listen(apiConfig.port, () => {
    console.log(`Listening on port: ${apiConfig.port}`);
  });
});
