export interface User {
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    role: "staff" | "admin";
}