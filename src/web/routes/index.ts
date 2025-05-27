import { Express } from "express";
import authRoutes from "./auth/authRoutes";
import userRoutes from "./user/userRoutes";

const useRouter = (app: Express) => {
  app.use("/api/", authRoutes);
  app.use("/api/user", userRoutes);
};

export default useRouter;
