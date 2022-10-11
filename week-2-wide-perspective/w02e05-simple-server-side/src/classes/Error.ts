export class HTTPError extends Error {
    readonly status: number

    constructor(status: number, message: string) {
        super(message)
        this.status = status
    }
}

export class UnauthorizedError extends HTTPError {
    constructor() {
        super(401, 'Unauthorized')
    }
}

export class ForbiddenError extends HTTPError {
    constructor() {
        super(403, 'Forbidden')
    }
}

export class ValidationError extends HTTPError {
    readonly errors: unknown

    constructor(errors: unknown) {
        super(422, 'Unsuccessful validation')
        this.errors = errors
    }
}

