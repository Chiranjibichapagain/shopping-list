import React, { Dispatch, SetStateAction } from "react";
import { SystemStyleObject } from "@styled-system/css";
import { T_ChannelNames } from "../../types";

export type T_HeaderProps = {
  styles: {
    headerStyles: SystemStyleObject;
    navItemStyles: SystemStyleObject;
    activeNavItemStyles: SystemStyleObject;
    navTextStyles: SystemStyleObject;
    activeNavTextStyles: SystemStyleObject;
  };
  navItems: T_ChannelNames[];
  activeNavItem: string;
  setActiveItem: (channel: T_ChannelNames) => void;
};
