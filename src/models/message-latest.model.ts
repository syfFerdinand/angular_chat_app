import { User } from "./user.model"

export interface MessageLatest {
    id: number,
    content: string,
    created_at: string,
    created_by: User
}

export const messages =[]