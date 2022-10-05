import { NextFunction, Request, Response } from "express";
import AuthServices from "./auth.service";
import { DatosLoginDto } from "./dto/datosLogin.dto";
import { TokenDto } from "./dto/datosToken.dto";

const loginServices = new AuthServices();

class AuthController {
  async verificToken(req: Request, res: Response, next: NextFunction) {
    const datos: TokenDto = req.body;
    if (!datos._email && datos._token) {
      const authorization = await loginServices.verificToken(datos._token);
      return res.status(200).send({
        auth: authorization,
      });
    } else if (!datos._email && !datos._token){
      return res.status(400).send({
        auth: false,
      });
    }

    next();
  }

  async login(req: Request, res: Response) {
    try {
      const datos: DatosLoginDto = req.body;

    const login = await loginServices.login(datos);

    if (login.status === 400) {
      return res
        .status(login.status)
        .send({ _message: login.mensagem, _auth: false });
    }

    return res.status(login.status).send({ _token: login.token, auth: true });
    } catch (error) {
      return res
        .status(400)
        .send({ _message: "error de login", _auth: false });
    }
  }
}

export default AuthController;
