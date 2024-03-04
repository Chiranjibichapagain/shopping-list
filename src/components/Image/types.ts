import { SystemStyleObject } from "@styled-system/css";

export type T_ImageProps = {
  styles: SystemStyleObject;
  src: string;
  alt: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
