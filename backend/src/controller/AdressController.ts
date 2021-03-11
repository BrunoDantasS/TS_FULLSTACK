import { getRepository } from "typeorm";
import { Adress } from "../entity/Adress";
import { Request, Response } from "express";

export const postAdress = async (request: Request, response: Response) => {
  const adress = await getRepository(Adress).save(request.body);
  return response.json(adress);
}

export const getAdress = async (request: Request, response: Response) => {
  const adress = await getRepository(Adress).find();
  return response.json(adress);
}

export const getAdressById = async (request: Request, response: Response) => {
  const { id } = request.params;
  const adress = await getRepository(Adress).findOne(id);
  return response.json(adress);
}

export const putAdress = async (request: Request, response: Response) => {
  const { id } = request.params;
  const adress = await getRepository(Adress).update(id, request.body);

  if (adress.affected === 1) {
    const userUpdated = await getRepository(Adress).findOne(id);
    return response.json(userUpdated);
  }

  return response.status(404).json({ message: 'Adress Not Found!' });
}

export const deleteAdress = async (request: Request, response: Response) => {
  const { id } = request.params;
  const adress = await getRepository(Adress).delete(id);

  if(adress.affected === 1) {
    return response.json({ message: 'Adress Removed' });
  }

  return response.status(404).json({ message: 'Adress Not Found!' });
}
