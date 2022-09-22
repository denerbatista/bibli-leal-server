import AdmServices from "../adm/adm.service";
import { UpdateAdmDto } from "../adm/dto/update-Adm.dto";
import { NewAdmDto } from "../adm/dto/new-Adm.dto";
import { Request, Response } from "express";
import { Adm } from "./entities/adm.entity";

const admServices = new AdmServices();

class AdmControllers {
  async getAll(req: Request, res: Response) {
    const adms = await admServices.getAll();

    res.send(adms);
  }

  async getForId(req: Request, res: Response) {
    const id = req.params.id as string;

    const adm = await admServices.getForId(id);

    res.send(adm);
  }

  async newAdm(req: Request, res: Response): Promise<void> {
    const body: NewAdmDto = req.body;

    try {
      const adm: Adm | unknown = await admServices.newAdm(body);

      res.status(201).send(adm);
    } catch (error) {
      res.status(400).send("Email já cadastrado");
    }
  }

  async updateAdm(req: Request, res: Response) {
    const id = req.params.id as string;
    const admEdited: UpdateAdmDto = req.body;

    try {
      const adm: Adm | unknown = await admServices.updateAdm(id, admEdited);

      res.send(adm);
    } catch (error) {
      res.status(400).send("Email agregado a outro usuário");
    }
  }

  async deleteAdm(req: Request, res: Response) {
    const id = req.params.id as string;

    await admServices.deleteAdm(id);

    res.sendStatus(204);
  }
}

export default AdmControllers;
