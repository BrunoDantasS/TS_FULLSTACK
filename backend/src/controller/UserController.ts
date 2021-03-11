import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const login = async (request: Request, response: Response) => {
  const { email, password } = request.body;

  const user = await getRepository(User).find({
    where: {
      email
    }
  })

  if (user.length === 1) {
    if (await bcrypt.compare(password, user[0].password)) {
      const token = jwt.sign({ id: user[0].id }, process.env.APP_SECRET)

      const data = {
        id: user[0].id,
        name: user[0].name,
        email: user[0].email,
        token
      }

      return response.json(data);
    } else {
      return response.status(404).json({ message: 'User Not Found!' });
    }
  }
}

export const postUser = async (request: Request, response: Response) => {
  const {
    name,
    phone,
    email,
    age,
    weight,
    ethnicity,
    password
  } = request.body;

  const passwordHash = await bcrypt.hash(password, 8);

  const user = await getRepository(User).save({
    name,
    phone,
    email,
    age,
    weight,
    ethnicity,
    password: passwordHash
  });

  return response.json(user);
}

export const getUsers = async (request: Request, response: Response) => {
  const user = await getRepository(User).find();
  return response.json(user);
}

export const getUserById = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(User).findOne(id);
  return response.json(user);
}

export const putUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(User).update(id, request.body);

  if (user.affected === 1) {
    const userUpdated = await getRepository(User).findOne(id);
    return response.json(userUpdated);
  }

  return response.status(404).json({ message: 'User Not Found!' })
}

export const deleteUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(User).delete(id);

  if(user.affected === 1) {
    return response.json({ message: 'User Removed' })
  }

  return response.status(404).json({ message: 'User Not Found!' })
}
