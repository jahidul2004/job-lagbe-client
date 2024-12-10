import AuthContext from "./AuthContext";
import {auth} from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const AuthInfo = {
        registerUser,
    };

    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
