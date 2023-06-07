import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup
} from "firebase/auth";

import app from '../../firebase.config'
import { createContext, useState, useEffect } from 'react';
export const Context = createContext();



const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //  const emailVarification = (user) => {
    //      return sendEmailVerification(user)
    //  }
    const profile = (user, name, photo) => {
        return updateProfile(user, { displayName: name, photoURL: photo })
    }

    const signIn = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider();
    const signinGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const githubProvider = new GithubAuthProvider();
    const signinGithub = () => {
        return signInWithPopup(auth, githubProvider)

    }



    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })

        return () => {
            subscribe()
        }
    }, [auth])


    const v = {
        signUp,
        profile,
        signIn,
        logOut,
        user,
        loading,
        signinGoogle,
        signinGithub

    }

    return (
        <Context.Provider value={v}>
            {children}
        </Context.Provider>


    );
};

export default AuthProvider;