export interface NavItem {
    title: string;
    enabled: boolean;
    url: string;
}

export interface Favicon {
    url: string;
    title: string;
}

export interface User {
    id: number,
    name: string,
    email: string,
    username: string
}