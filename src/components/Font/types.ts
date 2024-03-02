import { ReactNode } from "react";
import { SystemStyleObject } from "@styled-system/css";

export type T_FontProps = {
  styles: SystemStyleObject | undefined;
  children?: ReactNode;
  as?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
