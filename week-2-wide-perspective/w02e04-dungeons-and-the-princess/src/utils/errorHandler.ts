import { MissionFailedError } from './errors';

export const errorHandler = (error: MissionFailedError) => {
  const { person, message, type } = error;
  const messageLog = `${type}: Mission failed failed with ${person.title} => ${message}`;
  console.error(messageLog);
};
