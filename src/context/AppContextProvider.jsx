import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [plan, setPlan] = useState({});

    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }

    return(
        <AppContext.Provider value={{isAuth, setIsAuth, user, setUser, toggleAuth, token, setToken, plan, setPlan}}>
            {children}
        </AppContext.Provider>
    )
}