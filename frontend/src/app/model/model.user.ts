export class User {
  id: string;
  username: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  email: string;
  registrationDate: string;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  role: Role;
}

export enum Role {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  USER = 'USER',
  GUEST = 'GUEST'
}