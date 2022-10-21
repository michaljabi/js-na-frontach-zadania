import winston from "winston";

const { createLogger, format, transports } = winston;

export const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      level: "warn",
      filename: "src/logger/logsWarnings.log",
    }),
    new transports.File({
      level: "error",
      filename: "src/logger/logsErrors.log",
    }),
  ],
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.metadata(),
    format.prettyPrint()
  ),
});
