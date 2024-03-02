export const currentTime = () => {
  try {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
