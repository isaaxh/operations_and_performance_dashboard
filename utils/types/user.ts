
export type UserRole = "admin" | "manager" | "viewer";

export interface User {
    id: string; // uuid
    email: string;
    full_name: string;
    role: UserRole;
    created_at: string; // ISO timestamp
}