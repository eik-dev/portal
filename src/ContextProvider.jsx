import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextProvider({children}){
    let User = useState({
        name: "John Doe",
        email: "johndoe@gmail.com",
        role:"individual"// admin, individual or firm
    })

    return(
        <Context.Provider value={{User}}>
            {children}
        </Context.Provider>
    )
}