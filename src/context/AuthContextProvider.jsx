import { createContext, useContext } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage.js"

const AuthContext = createContext([]);

export const useAuthContext = () => useContext(AuthContext);

function AuthContextProvider({ children }) {

    const [authList, setAuthList] = useLocalStorage("navegation", []);

    return (
        <AuthContext.Provider value={{
            authList,
            setAuthList,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider