import express from "express";
import { config } from "dotenv";
import { MongoConnect } from "./database/mongo";
import routes from "./routes/routes";

const main = async () => {
  config();
  const app = express();
  app.use(express.json());
  app.use(routes);
  await MongoConnect.connect();

  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`API em execução na porta ${port}`));
};
main();
