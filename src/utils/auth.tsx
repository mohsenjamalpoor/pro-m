import { hash, compare } from "bcryptjs";

async function hashPassword({password}:any) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword({password, hashedPassword}:any) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

export { hashPassword, verifyPassword };