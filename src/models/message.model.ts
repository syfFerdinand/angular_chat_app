export interface Message {
    id: number,
    content: string,
    created_at: string,
    is_sender: boolean
}

export const messages =[]