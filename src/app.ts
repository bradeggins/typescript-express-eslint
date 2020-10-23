import express, { Request, Response } from "express";

const app: express.Application = express();

app.set("port", process.env.PORT || 3000);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World Express + TypeScript + Linting");
});

export default app;
