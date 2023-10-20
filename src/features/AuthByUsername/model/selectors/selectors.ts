import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginStateUsername = (state: StateSchema) => state.loginForm?.username;
export const getLoginStatePassword = (state: StateSchema) => state.loginForm?.password;
export const getLoginStateIsLoading = (state: StateSchema) => state.loginForm?.isLoading;
export const getLoginStateError = (state: StateSchema) => state.loginForm?.error;
