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
    address?: Address,
    company: Company
}

export interface Address {
    street: string,
    suite: string,
    city: string
}

export interface Company {
    name: string
}

export interface AuthInfo {
    access_token: string
    expires_in: 3600
    id_token: string,
    refresh_token: string
    token_type: string
}