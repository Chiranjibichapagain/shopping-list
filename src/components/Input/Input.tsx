import { FunctionComponent } from "react";
import { css } from "@styled-system/css";
import styled from "styled-components";

import { T_InputProps } from "./types";

export const Input: FunctionComponent<T_InputProps> = styled.input<T_InputProps>`
  ${(props: T_InputProps) => css(props.styles)};
`;
