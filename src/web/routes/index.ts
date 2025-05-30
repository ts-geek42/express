import { Express } from "express";
import authRoutes from "./auth/authRoutes";
import userRoutes from "./user/userRoutes";
import webhookRoutes from "./webhooks/webhookRoutes";

const useRouter = (app: Express) => {
  app.use("/api/", authRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/webhooks", webhookRoutes);
};

export default useRouter;
