import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

    const AuthInfo = {
        name: "John Doe",
    }

    return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
