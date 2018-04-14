export class User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}

enum Role {
    ADMIN,
    EDITOR,
    USER,
}