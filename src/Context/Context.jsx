import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const Context = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('user in the auth state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unSubscribe();
    }
  }, [])
  
  const info = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;