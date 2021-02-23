import { createContext } from 'react';

export const UserContext = createContext({
  user: {},
  email: undefined,
  setUser: () => { },
  setEmail: () => { }
});