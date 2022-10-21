import jwt from "jsonwebtoken";

export interface Token {
  valid: boolean;
  expired: boolean;
  decoded: {
    userID: number;
  };
}
export const createAccessToken = (id: number | undefined) => {
  return jwt.sign({ userID: id }, "secret123", { expiresIn: "7d" });
};

export const verifyAccessToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, "secret123");
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
};
