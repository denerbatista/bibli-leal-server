import { Schema, model } from "mongoose";
import { Adm } from "../entities/adms.entities/adms.entity";

const AdmSchema = new Schema<Adm>(
  {
    _email: { type: String, required: true, unique: true },
    _name: { type: String, required: true },
    _password: { type: String, required: true },
    _picture: { type: String, required: false },
    _dateCreate: { type: Date, required: true },
    _dateLastUpdate: { type: Date, required: false },
  },
  { versionKey: false }
);

const AdmsModel = model<Adm>("adms", AdmSchema);

export default AdmsModel;
