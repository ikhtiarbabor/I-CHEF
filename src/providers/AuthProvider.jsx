import React, { createContext, useEffect, useState } from 'react';
import app from '../config.firebase.js/config.firebase';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const signInGoogle = () => signInWithPopup(auth, googleProvider);
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateProfile = ()=>{
    setLoader(true);
    return updateProfile(auth,user);
  }
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unSubscriber();
  }, []);


  const authInfo = {
    signInGoogle,
    setUser,
    user,
    logOut,
    loader,
    createUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
