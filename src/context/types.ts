import React from "react";

export interface IAuthContext {
  user: {
    id: string;
    name: string;
    password: string;
  };
  handleLogin: (loginData: ILoginData) => Promise<void>;
}

export interface IAuthContextProviderProps {
  children: React.ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}
