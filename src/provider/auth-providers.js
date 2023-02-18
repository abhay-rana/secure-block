import { createContext, useContext, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { provider } from 'utils/firebase';
import jwt_decode from 'jwt-decode';

// create contexts
const AuthContext = createContext();

// context consumer hook
export const useAuth = () => {
    // get the context
    const context = useContext(AuthContext);
    console.log('context');
    // if `undefined`, throw an error
    if (context === undefined) {
        throw new Error('useAuthContext was used outside of its Provider');
    }

    return { ...context };
};

const AuthProvider = ({ children }) => {
    const [is_success, setIsSuccess] = useState({ state: false, data: null });
    const [is_error, setISError] = useState({ state: false, msg: null });
    const [is_login, setLogin] = useState(verifiedToken());

    const AuthSignUp = () => {
        const auth = getAuth();
        return signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log({
                    token,
                    user,
                });

                localStorage.setItem('token', user.stsTokenManager.accessToken);
                setIsSuccess({
                    state: true,
                    data: user,
                });
                setLogin(true);
                return Promise.resolve(result);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential);
                setISError({
                    state: true,
                    msg: errorMessage,
                });
            });
    };

    function verifiedToken() {
        const userToken = localStorage.getItem('token') ?? false;
        if (!!userToken) {
            const decoded = jwt_decode(userToken);
            const currentTime = parseInt(new Date().getTime() / 1000);
            console.log(decoded, currentTime);
            if (decoded.exp > currentTime) return true;
        }
        return userToken;
    }

    return (
        <AuthContext.Provider
            value={{
                is_success: is_success.state,
                is_error: is_error.state,
                user: is_success.data,
                error: is_error.msg,
                is_login,
                AuthSignUp,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;