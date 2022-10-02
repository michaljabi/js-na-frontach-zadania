export const logger = {
  log: (...messages: Array<string | number>) => console.log('\x1b[36m%s\x1b[0m', ...messages),
  info: (...messages: Array<string | number>) => console.log('\x1b[36m%s\x1b[0m', ...messages),
  warn: (...messages: Array<string | number>) => console.log('\x1b[33m%s\x1b[0m', ...messages),
  error: (...messages: Array<string | number>) => console.log('\x1b[31m%s\x1b[0m', ...messages),
  success: (...messages: Array<string | number>) => console.log('\x1b[32m%s\x1b[0m', ...messages),
  _raw: console.log
};
