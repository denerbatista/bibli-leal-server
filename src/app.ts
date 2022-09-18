import express from "express";
import cors from "cors";
import logger from "morgan";

import { router } from "./routes";

// * Cria o app
export const app: express.Express = express();

// * Configuração dos middlewares
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// * Integra o endpoint na aplicação
app.use("/", router);
