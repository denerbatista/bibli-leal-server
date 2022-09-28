import { Request, Response } from "express";
import AuthServices from "./auth.service";
import { DatosLoginDto } from "./dto/datosLogin.dto";

const loginServices = new AuthServices();

class AuthController {
  async login(req: Request, res: Response) {
    const datos: DatosLoginDto = req.body;

    const login = await loginServices.login(datos);

    if (login.status === 400) {
      return res.status(login.status).send(login.mensagem);
    }

    res.status(login.status).send({ token: login.token });
  }
}

export default AuthController;
