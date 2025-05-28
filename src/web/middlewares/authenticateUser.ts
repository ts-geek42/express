import { NextFunction } from "express";
import { decodeJwtToken } from "../../helpers/auth";

export const authenticateUser = async (
  req: any,
  _res: any,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return next(new Error("Authentication token is missing"));
  } else {
    const tokenDetails = decodeJwtToken(token);
    const mutationId = req.params.id;
    const userId = typeof tokenDetails !== "string" ? tokenDetails?.id : "";
    if (userId !== mutationId) {
      return next(new Error("You are not authorized to perform this action"));
    }
    next();
  }
};
