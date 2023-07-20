export interface User {
  username: string;
  email?: string;
  password: string;
  team?: string;
  id?: number;
}

export interface LoginDTO {
  username: string; 
  password: string;
}

export interface RegisterDTO {
  username: string;
  email: string;
  password: string;
  team: string;
}
