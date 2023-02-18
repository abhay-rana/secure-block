import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { provider } from "utils/firebase";
import jwt_decode from "jwt-decode";

const useAuth = () => {
	const [isSuccess, setIsScucess] = useState({ state: false, data: null });
	const [isError, setISError] = useState({ state: false, msg: null });
	const [alreadyLogin, setAlreadyLogin] = useState(false);

	function signUp() {
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				console.log({
					token,
					user,
				});

				localStorage.setItem("token", user.stsTokenManager.accessToken);
				setIsScucess({
					state: true,
					data: user,
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log(errorCode, errorMessage, email, credential);
				setISError({
					state: true,
					msg: errorMessage,
				});
			});
	}

	useEffect(() => {
		const userToken = localStorage.getItem("token");
		if (userToken !== null) {
			console.log("TOKEN", userToken);
			verfiedToken(userToken);
		}
	}, []);

	const verfiedToken = (token) => {
		const decoded = jwt_decode(token);
		const currentTime = parseInt(new Date().getTime() / 1000);
		console.log(decoded, currentTime);
		if (decoded.exp > currentTime) setAlreadyLogin(true);
	};

	return { isSuccess: isSuccess.state, user: isSuccess.data, isError: isError.state, error: isError.msg, isLogin: alreadyLogin, signUp };
};

export default useAuth;
