import AuthContext from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const AuthInfo = {
        registerUser,
        user,
        setUser,
        loading,
        setLoading,
    };

    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
