import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const auth = async (request: Request, response: Response, next: NextFunction) => {
  
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: 'Tojen is require!' });
  }

  const [ , token] = authHeader.split(' ');

  try {

    await jwt.verify(token, process.env.APP_SECRET);
    next();

  } catch(err) {

    return response.status(401).json({ message: 'Tojen invalid!' });

  }  

}