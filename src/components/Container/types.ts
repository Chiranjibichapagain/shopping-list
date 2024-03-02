import React from "react";
import { ReactNode } from "react";
import { SystemStyleObject } from "@styled-system/css";

export type T_ContainerProps = {
  styles: SystemStyleObject | undefined;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  role?: string;
};
