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
    username: string,
    phone: string,
    website: string,
    address?: {
        street: string,
        suite: string,
        city: string
    },
    company: {
        name: string
    } 
}