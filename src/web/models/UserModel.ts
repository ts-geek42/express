import { model, Schema } from "mongoose";
import { UserTypes } from "./UserTypes";

const usersSchema = new Schema<UserTypes>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  email: String,
  birthdate: Date,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
});

const UserModel = model<UserTypes>("users", usersSchema);

export default UserModel;
