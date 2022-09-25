import { Router } from "express";
import BookControllers from "../book/book.controller";

export const admRouter: Router = Router();
const bookControllers = new BookControllers();

admRouter.get("/getAll", bookControllers.getAll);
admRouter.get("/getForId/:id", bookControllers.getForId);
admRouter.post("/newBook", bookControllers.newBook);
admRouter.put("/updateBook/:id", bookControllers.updateBook);
admRouter.delete("/deleteBook/:id", bookControllers.deleteBook);
