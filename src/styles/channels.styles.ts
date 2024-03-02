import { SystemStyleObject } from "@styled-system/css";

export const channelBaseStyles = (): SystemStyleObject => {
  return {
    boxSizing: "border-box",
    margin: "0 auto",
    maxWidth: "602px",
    height: ["80%", "83%", "83%"],
  };
};
export const messagesContainer = (): SystemStyleObject => {
  return {
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "20px",
    maxWidth: "603px",
    height: "100%",
    backgroundColor: "rgba(112, 115, 138, 0.8)",
    borderRadius: [0, "0 0px 10px 10px"],
    overflowY: "scroll",
  };
};

export const blockContainerStyles = (): SystemStyleObject => {
  return {
    padding: "7px",
    display: "flex",
    justifyItems: "center",
    alignContent: "start",
    marginBottom: "10px",
    ":hover": {
      backgroundColor: "#81849c",
      borderRadius: "6px",
    },
  };
};
export const messageContainerStyles = (): SystemStyleObject => {
  return {
    width: "70%",
  };
};

export const userImageStyles = (): SystemStyleObject => {
  return {
    width: "50px",
    height: "50px",
    margin: "0 15px 0 0",
  };
};
export const userContainerStyles = (): SystemStyleObject => {
  return {
    display: "flex",
    justifyContent: "start",
    alignItems: "end",
    margin: "5px 0",
  };
};
export const userNameStyles = (): SystemStyleObject => {
  return {
    margin: "0",
    color: "white",
    fontWeight: "800",
  };
};
export const timeStyles = (): SystemStyleObject => {
  return {
    color: "white",
    margin: "0 10px",
    fontSize: "12px",
  };
};
export const messageStyles = (): SystemStyleObject => {
  return {
    margin: "0",
    color: "white",
  };
};
export const noMessageTextStyles = (): SystemStyleObject => {
  return {
    margin: "100px auto",
    textAlign: "center",
    color: "white",
  };
};

export const inputContainerStyles = (): SystemStyleObject => {
  return {
    boxSizing: "border-box",
    margin: "15px auto",
    width: ["95%", "100%"],
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #70738a",
    borderRadius: [0, "6px"],
    paddingRight: "10px",
  };
};
export const inputStyles = (): SystemStyleObject => {
  return {
    width: ["83%", "88%"],
    border: "none",
    borderRight: "0.5px solid #70738a",
    backgroundColor: "transparent",
    height: "35px",
    borderRadius: "6px 0 0 6px",
    padding: "5px 10px",
    color: "#2a2a2a",
    fontSize: "16px",
  };
};
export const messageSendBtnStyles = (): SystemStyleObject => {
  return {
    cursor: "pointer",
    width: "30px",
    height: "30px",
    color: "red",
    ":hover": {
      transform: "translate(5%, 0%)",
      transition: "0.3s ease-in-out",
    },
  };
};
export const messageSendDisabledBtnStyles = (): SystemStyleObject => {
  return {
    width: "30px",
    height: "30px",
    color: "red",
    cursor: "not-allowed",
    filter: "brightness(1100%)",
  };
};
