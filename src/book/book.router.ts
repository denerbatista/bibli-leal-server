import { Router } from "express";
import BookControllers from "./book.controller";

export const bookRouter: Router = Router();
const bookControllers = new BookControllers();

bookRouter.get("/getAll", bookControllers.getAll);
bookRouter.get("/getForId/:_id", bookControllers.getForId);
bookRouter.post("/newBook", bookControllers.newBook);
bookRouter.put("/updateBook/:_id", bookControllers.updateBook);
bookRouter.delete("/deleteBook/:_id", bookControllers.deleteBook);
