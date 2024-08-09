import React, { createContext, useState } from "react";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<any>({} as any);
  const navigate = useNavigate();

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `/users?email=${loginData.email}&password=${loginData.password}`
      );
      if (data.length === 1) {
        setUser(data[0]);
        navigate("/feed");
      }
    } catch (error) {
      console.log("Houve um erro, tente novamente:" + error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
