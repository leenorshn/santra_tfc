import React, { createContext, useContext, useEffect, useState } from 'react';
import { signOut, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect, getRedirectResult, } from 'firebase/auth';
import { auth } from './firebase';

export const AuthContext = createContext<UserContextType | null>(null);

type User = {
    uid: string,
    email: string,
    photoURL: string
    displayName: string

}



type UserContextType = {
    currentUser: User | null
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>

    loading: boolean
    login: Function
    logout: Function

}


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {

                setCurrentUser(user as User);
            }
            setLoading(false);
        });

        return unsubscribe();
    }, []);

    async function login(form) {
        setLoading(true);

        await signInWithEmailAndPassword(auth, form.email, form.password).then((result) => {
            setLoading(false);
            setCurrentUser(result.user as User);
        }).catch((error) => {
            // Handle Errors here.

            setLoading(false);   // ...
        });



    }

    async function logout() {
        setCurrentUser(null);
        await signOut(auth);
        console.log('logout');
        return;
    }


    const value = {
        currentUser,
        setCurrentUser,
        loading,
        login,
        logout,

    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}