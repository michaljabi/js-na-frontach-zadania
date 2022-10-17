import { TokenUserPayload } from '../../src/services/auth/auth.service';

declare global{
    namespace Express {
        interface Request {
            user: TokenUserPayload;
        }
    }
}

export {}
