import React from "react";
import { SystemStyleObject } from "@styled-system/css";

export type T_InputProps = {
  styles: SystemStyleObject;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
