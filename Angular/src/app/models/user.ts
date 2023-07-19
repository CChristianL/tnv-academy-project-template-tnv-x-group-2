export interface User {
  username: string;
  email?: string;
  password: string;
  team?: string;
  id?: number;
}

export interface LoginDTO {
  username: string; //nel caso usare email se si sceglie security via mail
  password: string;
}

export interface RegisterDTO {
  username: string;
  email: string;
  password: string;
  team: string;
}
