import { FunctionComponent } from "react";
import { css } from "@styled-system/css";
import styled from "styled-components";

import { T_ContainerProps } from "./types";

export const Container: FunctionComponent<T_ContainerProps> = styled.div<T_ContainerProps>`
    ${(props: T_ContainerProps) => css(props.styles)};
`;
