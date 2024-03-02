import { FunctionComponent } from "react";
import { css } from "@styled-system/css";
import styled from "styled-components";

import { T_FontProps } from "./types";

export const Font: FunctionComponent<T_FontProps> = styled.p<T_FontProps>`
  ${(props: T_FontProps) => css(props.styles)};
`;
