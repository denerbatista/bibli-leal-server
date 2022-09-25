import AdmsModel from "../adm/adm.model";
import bcryptjs from "bcryptjs";
import { NewAdmDto } from "../adm/dto/new-Adm.dto";
import { UpdateAdmDto } from "../adm/dto/update-Adm.dto";
import { Adm } from "../adm/entities/adm.entity";

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
    UpdateAdm: UpdateAdmDto
  ): Promise<Adm | unknown> {
    if (UpdateAdm._password) {
      const encrypted: string = await bcryptjs.hash(
        UpdateAdm._password as string,
        10
      );
      UpdateAdm._password = encrypted;
    }
    try {
      await AdmsModel.updateOne({ _id: _id }, UpdateAdm);
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
