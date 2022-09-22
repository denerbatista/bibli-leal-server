import AdmsModel from "../models/adms.model";
import bcryptjs from "bcryptjs";
import { NewAdmDto } from "../dto/adms.dto/newAdm.dto";
import { UpdateAdmDto } from "../dto/adms.dto/updateAdm.dto";
import { Adm } from "../entities/adms.entities/adms.entity";

class AdmServices {
  async getAll(): Promise<Adm[] | null> {
    const adms: Adm[] | null = await AdmsModel.find();
    return adms;
  }

  async getForId(id: string): Promise<Adm | null> {
    const adm: Adm | null = await AdmsModel.findById(id);
    return adm;
  }

  async newAdm(newAdm: NewAdmDto): Promise<Adm | unknown> {
    const encrypted: string = await bcryptjs.hash(
      newAdm._password as string,
      10
    );
    newAdm._password = encrypted;
    try {
      const adm: Adm = await AdmsModel.create(newAdm);
      return adm;
    } catch (error) {
      throw error;
    }
  }

  async updateAdm(
    _id: string,
    UpdateAdmDto: UpdateAdmDto
  ): Promise<Adm | unknown> {
    if (UpdateAdmDto._password) {
      const encrypted: string = await bcryptjs.hash(
        UpdateAdmDto._password as string,
        10
      );
      UpdateAdmDto._password = encrypted;
    }
    try {
      await AdmsModel.updateOne({ _id: _id }, UpdateAdmDto);
      const admEdited: Adm | null = await AdmsModel.findById(_id);
      return admEdited;
    } catch (error) {
      throw error;
    }
  }

  async deleteAdm(_id: string): Promise<void> {
    await AdmsModel.findByIdAndDelete(_id);
  }
}

export default AdmServices;
