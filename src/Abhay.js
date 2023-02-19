import { useAuth } from "provider/auth-providers";
import React from "react";

const Abhay = () => {
	const { is_success, user, isError, isLogin, error, signUp } = useAuth();
	console.log({ is_success, user, isError, isLogin });
	return <div>Abhay</div>;
};

export default Abhay;
