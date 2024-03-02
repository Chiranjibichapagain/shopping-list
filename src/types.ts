export type T_Message = {
  id: string;
  user: string;
  time: string;
  message: string;
};
export type T_Channels = {
  frontend: T_Message[];
  backend: T_Message[];
  devops: T_Message[];
};

export type T_NewMessageBody = {
  id: string;
  user: string;
  time: string | undefined;
  message: string;
};

export type T_ChannelNames = "frontend" | "backend" | "devops";
