export interface UserTypes {
  firstName: string;
  lastName: string;
  email: string;
  birthdate: Date;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}
