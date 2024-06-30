export interface LoginRequest {
    email: string,
    password: string,
}

export interface LoginResponse {
    token: string,
    roles: Array<string>
}

export interface CreateAccountRequest {
    username: string,
    password: string,
    number: string
}