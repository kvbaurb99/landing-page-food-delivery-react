import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useContext, useState, useEffect, createContext } from "react";



const AuthContext = createContext()

export function AuthContextProvider({children}) {

    const [user, setUser] = useState({})

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn  (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut () {
        return signOut(auth)
    }

    useEffect(() => {
        const none = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            none()
        }
    })

  return (
    <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
        {children}
    </AuthContext.Provider>
  )
}


export function UserAuth() {
    return useContext(AuthContext)
}
