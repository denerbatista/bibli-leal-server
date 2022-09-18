import { Router } from "express";

export const router: Router = Router();

router.get("/", (req, res) => res.send("API with Express and TypeScript"));
