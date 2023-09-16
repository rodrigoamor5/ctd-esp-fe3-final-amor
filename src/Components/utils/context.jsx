import { createContext, useEffect, useState } from "react";
// Creamos el contexto utilizando createContext()
export const UserContext = createContext();
 // Creamos el proveedor del contexto que nos permitirá
 // compartir dicho contexto a los componentes hijos.
const UserContextProvider = ({ children }) => {
 return (
   <UserContext.Provider value={{ user, changeUser }}>
     {children}
   </UserContext.Provider>
 );
};
export default UserContextProvider;