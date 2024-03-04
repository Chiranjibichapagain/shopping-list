import React from "react";
import { SystemStyleObject } from "@styled-system/css";

export type T_ButtonProps = {
    styles: SystemStyleObject;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
    disabled?: boolean;
    active?: boolean;
};
