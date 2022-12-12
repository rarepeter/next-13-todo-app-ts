interface NewUserData {
    id: string
    email: string
    name?: string | null
    password: string
    verificationString?: string | null
    verified: boolean | undefined
}

interface DUser {
    id: string
    email: string
    name?: string | null
    password: string
    verificationString?: string | null
    verified: boolean | undefined
}

interface UserDto {
    id: string
    email: string
    name?: string | null
}

export type { DUser, UserDto, NewUserData }