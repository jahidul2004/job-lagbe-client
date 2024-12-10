import AuthContext from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const AuthInfo = {
        registerUser,
        user,
        setUser,
    };

    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
