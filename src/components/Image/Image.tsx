import { FunctionComponent } from "react";
import { css } from "@styled-system/css";
import styled from "styled-components";

import { T_ImageProps } from "./types";

export const Image: FunctionComponent<T_ImageProps> = styled.img<T_ImageProps>`
    ${(props: T_ImageProps) => css(props.styles)};
`;
