export default class AuthService {
    async login(email: string, password: string): Promise<string> {
        const token = email + password;
        localStorage.setItem('token', token);
        return token;
    }

    async loadSession(): Promise<string | null> {
        const token = localStorage.getItem('token');
        return token;
    }

    async logout(): Promise<boolean> {
        localStorage.removeItem('token');
        return true;
    }
}