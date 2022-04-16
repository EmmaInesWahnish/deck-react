import { createContext, useContext } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage.js"
import {auth} from "../firebase.config.js";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext([]);

export const useAuthContext = () => useContext(AuthContext);

function AuthContextProvider({ children }) {

    const [authList, setAuthList] = useLocalStorage("navegation", []);

    const register = async (email, password)=>{
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
        } catch (error){
            console.log(error.message);
        }
    }

    const login = async (email,password)=>{
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
        } catch (error){
            console.log(error.message);
        }
    }

    const logout = async ()=>{
        await signOut(auth);
    }

    return (
        <AuthContext.Provider value={{
            authList,
            setAuthList,
            register,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider