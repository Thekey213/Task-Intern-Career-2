// AuthProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);
  const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);
  const signOut = () => auth.signOut();

  const value = {
    currentUser,
    signIn,
    signUp,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
