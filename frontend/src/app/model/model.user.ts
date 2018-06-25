export class User {
  id: string;
  username: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  email: string;
  registrationDate: string;
  role: Role;
}

export enum Role {
  ADMIN,
  EDITOR,
  USER,
  GUEST
}