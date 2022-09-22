import { Router } from "express";
import AdmControllers from "../controllers/adm.controller";

export const admRouter: Router = Router();
const admControllers = new AdmControllers();

admRouter.get("/getAll", admControllers.getAll);
admRouter.get("/getForId/:id", admControllers.getForId);
admRouter.post("/newAdm", admControllers.newAdm);
admRouter.put("/updateAdm/:id", admControllers.updateAdm);
admRouter.delete("/deleteAdm/:id", admControllers.deleteAdm);
