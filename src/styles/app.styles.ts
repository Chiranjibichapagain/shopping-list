import { SystemStyleObject } from "@styled-system/css";
import backgroundImage from "../assets/background.jpeg";

export const appRootStyles = (): SystemStyleObject => {
  return {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#f2f2f2",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    fontFamily: "lato, sans-serif",
  };
};

export const headerStyles = (): SystemStyleObject => {
  return {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
};

export const navItemStyles = (): SystemStyleObject => {
  return {
    backgroundColor: "rgba(195, 196, 201, 0.7)",
    borderRight: "0.5px solid white",
    width: "200px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#D3D6E9",
      transition: "0.3s ease-in-out",
    },
    ":last-of-type": {
      border: "none",
    },
  };
};
export const activeNavItemStyles = (): SystemStyleObject => {
  return {
    ...navItemStyles(),
    backgroundColor: "rgba(112, 115, 138, 0.8)",
    ":hover": {
      backgroundColor: "rgba(112, 115, 138, 0.8)",
    },
  };
};

export const navTextStyles = (): SystemStyleObject => {
  return {
    fontWeight: "600",
    color: "#565657",
  };
};
export const activeNavTextStyles = (): SystemStyleObject => {
  return {
    ...navTextStyles(),
    color: "#f2f2f2",
  };
};

export const noChannelsContainerStyles = (): SystemStyleObject => {
  return {
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "20px",
    maxWidth: "602px",
    height: "80%",
    border: "1px solid rgb(195, 196, 201)",
    borderRadius: "0 0px 10px 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
};

export const noChannelsGifStyles = (): SystemStyleObject => {
  return {
    width: "300px",
    height: "300px",
  };
};
export const noChannelSelectedTextStyles = (): SystemStyleObject => {
  return {
    margin: "50px auto",
    width: "600px",
    fontSize: "18px",
    color: "#2a2a2a",
    textAlign: "center",
  };
};
