import bcrypt from "bcrypt";

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, Number(process?.env?.SALT_ROUNDS));
}

export function comparePassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}
