import { useContext } from "react";
import {AppContext} from "../context/AppContextProvider";
import {Navigate} from "react-router-dom";

export default function PrivateRoute({children}){
    const {isAuth, token} = useContext(AppContext);

    if(!isAuth){
        return <Navigate t="/" />
    }

    return children;
}