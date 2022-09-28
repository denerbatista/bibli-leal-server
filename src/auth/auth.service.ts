// Importação do model para acessar os usuarios
import "./auth.model";
// Importação das bibliotecas de segurança
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import AdmsModel from "../adm/adm.model";
import { Adm } from "../adm/entities/adm.entity";
import { DatosLoginDto } from "./dto/datosLogin.dto";

class AuthServices {
  async login(datos: DatosLoginDto) {
    const adm: Adm | null = await AdmsModel.findOne({ _email: datos._email });

    if (!adm) {
      return { status: 400, mensagem: "Email incorreto" };
    }

    const passwordValid = await bcryptjs.compare(
      datos._password,
      adm._password as string
    );

    if (passwordValid === false) {
      return { status: 400, mensagem: "Senha incorreta" };
    }

    const token: string = jwt.sign({ email: datos._email }, "chave_secreta", {
      expiresIn: "24h",
    });

    return { status: 200, token: token };
  }
}

export default AuthServices;
