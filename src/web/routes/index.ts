import { Express } from "express";
import userRoutes from "./user/userRoutes";

const useRouter = (app: Express) => {
  app.use("/api/user", userRoutes);
};

export default useRouter;
