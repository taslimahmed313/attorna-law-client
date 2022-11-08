import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const googleProvider = () =>{
        return signInWithPopup(auth, provider);
    }

    const register = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () =>{
        return signOut(auth);
    }

    const profileUpdate = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    },[])

    const authInfo = {
      user,
      register,
      login,
      logout,
      googleProvider,
      profileUpdate,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;