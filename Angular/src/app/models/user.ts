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

export interface UpdateDTO {
  email?: string; 
  password?: string;
}

export interface RegisterDTO {
  username: string;
  email: string;
  password: string;
  team: string;
}

export interface DistributionDTO {
  red: number;
  blu: number;
  rEnabled: boolean;
  bEnabled: boolean;
}
