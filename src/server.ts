import dotenv from "dotenv";
import express, { Request, Response } from "express";
const app = express();
dotenv.config();

app.use([express.json(), express.urlencoded({ extended: true })]);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the server" });
});
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
