import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";

import { connectServerDataBase } from "./config/db";
import routes from "./routes";


export const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

connectServerDataBase();

app.use(routes);







