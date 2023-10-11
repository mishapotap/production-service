export interface UserSchema {
    authData?: User;
}
export interface User {
    id: string; // TODO Вроде как надо number
    username: string;
}
