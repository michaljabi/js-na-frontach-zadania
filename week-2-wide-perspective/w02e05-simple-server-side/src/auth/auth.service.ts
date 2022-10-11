import { SignJWT, importPKCS8, jwtVerify } from 'jose'

const getPrivateKey = async () => importPKCS8(process.env.PRIVATE_KEY ?? '', 'ES256')

export const createSignedJWT = async (payload: Record<string, unknown>): Promise<string> => {
    console.log(await getPrivateKey())
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'ES256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(await getPrivateKey())
}

export const getUserByToken = async (token: string) => jwtVerify(token, await getPrivateKey())
