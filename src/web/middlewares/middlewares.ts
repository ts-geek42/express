import { Express } from "express";
import { clerkMiddleware } from "@clerk/express";

export const middlewares = (app: Express) => {
  app.use(clerkMiddleware());
};
