import express, { Express } from "express";
import cors from "cors";
import logger from "morgan";

import { admRouter } from "./adm/adm.router";
import { bookRouter } from "./book/book.router";

// * Cria o app
export const app: Express = express();

// * Configuração dos middlewares
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// * Integra o endpoint na aplicação
app.use("/adm", admRouter);
app.use("/book", bookRouter);
