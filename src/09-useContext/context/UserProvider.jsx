import { useState } from "react";
import { UserContext } from "./index";

// const user = {
//   id: 123,
//   name: 'Fernanda Cancino',
//   email: 'fer@cancino.com',
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState()
  return (
    // <UserContext.Provider value={{hola: 'mundo', user: user}}>
    <UserContext.Provider value={{user, setUser}}>
      { children }
    </UserContext.Provider>
  )
}
