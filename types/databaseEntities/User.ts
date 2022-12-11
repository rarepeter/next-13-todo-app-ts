interface NewUserData {
    email: string
    name?: string | null
    password: string
    verificationString?: string | null
    verified: boolean | undefined
}

interface DUser {
    id: Number
    email: string
    name?: string | null
    password: string
    verificationString?: string | null
    verified: boolean | undefined
}

interface UserDto {
    id: Number
    email: string
    name?: string | null
}

export type { DUser, UserDto, NewUserData }