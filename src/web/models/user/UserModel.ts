import { model, Schema } from "mongoose";
import { UserTypes } from "./UserTypes";

const usersSchema = new Schema<UserTypes>(
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
    password: {
      type: String,
      required: true,
      select: false,
    },
    birthdate: Date,
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
  },
  { timestamps: true }
);

const UserModel = model<UserTypes>("users", usersSchema);

export default UserModel;
