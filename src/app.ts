import express, { Request, Response } from "express";
import morgan from 'morgan'

const app: express.Application = express();

app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(morgan(':date[web] :method :url :status :res[content-length] - :response-time ms'))

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World Express + TypeScript + Linting");
});

export default app;
