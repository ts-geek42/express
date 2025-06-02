import { model, Schema } from "mongoose";
import { ClerkUserType } from "./UserTypes";

const clerkUserSchema = new Schema<ClerkUserType>(
  {
    firstName: {
      type: String,
    },
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    birthdate: Date,
    gender: String,
    userId: { type: String, required: true, unique: true },
    phoneNumber: String,
  },
  { timestamps: true }
);

const ClerkUserModel = model<ClerkUserType>("clerkUsers", clerkUserSchema);
export default ClerkUserModel;
