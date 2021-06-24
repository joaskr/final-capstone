import React, { useContext, useState, useEffect } from "react";
import { auth as firebaseAuth } from "./firebase";

export const AuthContext = React.createContext({ loggedIn: false });

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthInit() {
  const [authState, setAuthState] = useState({
    loading: true,
    loggedIn: false,
  });
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setAuthState({ loading: false, loggedIn: user });
    });
  }, []);
  return authState;
}
