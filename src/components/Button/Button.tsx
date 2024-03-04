import { FunctionComponent } from "react";

import { css } from "@styled-system/css";

import styled from "styled-components";
import { T_ButtonProps } from "./types";

export const Button: FunctionComponent<T_ButtonProps> = styled.button<T_ButtonProps>`
  ${(props: T_ButtonProps) => css(props.styles)};
`;
