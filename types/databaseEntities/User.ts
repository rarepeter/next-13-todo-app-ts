interface DUser {
    id: Number
    email: string
    name?: string | null
    password: string
    verificationstring?: string | undefined
    verified: Boolean
}

interface UserDto {
    id: Number
    email: string
    name?: string | null
}

export type { DUser, UserDto }