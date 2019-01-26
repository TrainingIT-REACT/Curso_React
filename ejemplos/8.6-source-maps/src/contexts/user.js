import { createContext } from 'react';

const UserContext = createContext({
  signedIn: false,
  updateUser: () => {}
});

export default UserContext;
