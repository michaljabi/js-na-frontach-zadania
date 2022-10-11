import { createLogger, format, transports } from 'winston'

export const logger = createLogger({
    level: 'error',
    format: format.combine(
        format.label({
            label: 'Error'
        }),
        format.timestamp(),
        format.prettyPrint()
    ),
    transports: [
        new transports.File({ filename: `${process.cwd()}/src/logs/error.log` })
    ]
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console())
}
