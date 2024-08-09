import React from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: React.ReactNode;
  name: string;
  control: any;
  errorMessage?: string;
}
