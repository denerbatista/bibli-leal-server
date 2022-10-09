import { Router } from "express";
import GenreControllers from "./genre.controller";

export const genreRouter: Router = Router();
const genreControllers = new GenreControllers();

genreRouter.get("/getAll", genreControllers.getAll);
genreRouter.get("/getForId/:_id", genreControllers.getForId);
genreRouter.post("/newGenre", genreControllers.newGenre);
genreRouter.put("/updateGenre/:_id", genreControllers.updateGenre);
genreRouter.delete("/deleteGenre/:_id", genreControllers.deleteGenre);
