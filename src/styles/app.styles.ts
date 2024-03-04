import { SystemStyleObject } from "@styled-system/css";
import backgroundImage from "../assets/background.jpeg";

type T_ListStyleProps = {
  type?: string;
};

type T_headingStylesProps = {
  align?: "right" | "left" | "center";
};

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
export const appBodyStyles = (): SystemStyleObject => {
  return {
    boxSizing: "border-box",
    width: "960px",
    margin: "0 auto",
  };
};

export const headerStyles = (): SystemStyleObject => {
  return {
    width: "100%",
    padding: "20px ",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };
};

export const logoStyles = (): SystemStyleObject => {
  return {
    width: "80px",
    height: "80px",
  };
};

export const iconStyles = (): SystemStyleObject => {
  return {
    width: "20px",
    height: "20px",
    color: "#004975",
    cursor: "pointer",
    margin: "0 5px",
  };
};

export const appTextStyles = (): SystemStyleObject => {
  return {
    color: "#004975",
    margin: 0,
    textAlign: "center",
  };
};

export const appNameStyles = (): SystemStyleObject => {
  return {
    fontSize: "80px",
    color: "#004975",
    width: "800px",
    margin: 0,
    textAlign: "center",
    fontWeight: 800,
  };
};

export const bodyContainerStyles = (): SystemStyleObject => {
  return {
    width: "100%",
    boxSizing: "border-box",
    padding: "20px 200px",
  };
};

export const headingStyles = (
  props: T_headingStylesProps
): SystemStyleObject => {
  return {
    fontSize: "22px",
    color: "#004975",
    margin: 0,
    fontWeight: 800,
    textAlign: props.align ?? "left",
  };
};

export const shoppingListItemStyles = (): SystemStyleObject => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 15px",
    "&:hover": {
      backgroundColor: "rgba(128, 131, 158, 0.5)",
      borderRadius: "6px",
    },
  };
};

export const shoppingListTextStyles = (
  props: T_ListStyleProps
): SystemStyleObject => {
  return {
    width: props.type === "product" ? "300px" : "50px",
    fontSize: "16px",
    color: "#004975",
    margin: "0 10px",
    fontWeight: 800,
  };
};

export const inputStyles = (props: T_ListStyleProps): SystemStyleObject => {
  return {
    width: props.type === "product" ? "300px" : "70px",
    height: "30px",
    background: "none",
    border: "1px solid gray",
    borderRadius: "4px",
    padding: "0 8px",
    margin: "0 15px",
  };
};

export const buttonStyles = (): SystemStyleObject => {
  return {
    minWidth: "80px",
    height: "30px",
    backgroundColor: "#004975",
    border: "none",
    borderRadius: "8px",
    padding: "0 8px",
    color: "#f2f2f2",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    ":disabled": {
      backgroundColor: "gray",
      cursor: "not-allowed",
    },
  };
};

export const addNewItemContainerStyles = (): SystemStyleObject => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    marginBottom: "50px",
  };
};

//    backgroundColor: "rgba(128, 131, 158, 0.9)",
