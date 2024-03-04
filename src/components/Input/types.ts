import React from "react";
import { SystemStyleObject } from "@styled-system/css";

export type T_InputProps = {
  styles: SystemStyleObject;
  type: string;
  name: string;
  defaultValue?: string | number;
  value?: string | number;
  min?: number;
  required?: boolean;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
