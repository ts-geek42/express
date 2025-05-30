import "dotenv/config";
import express from "express";
import { config, dbConnect } from "./core";
import { middlewares } from "./web/middlewares";
import useRouter from "./web/routes";

const makeApp = () => {
  const app = express();
  const port = config.PORT;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  dbConnect();

  middlewares(app);

  useRouter(app);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
export default makeApp;
