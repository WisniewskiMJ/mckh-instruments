import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
	return (
		<div className='auth-container'>
			<div>
				<SignInForm />
			</div>
			<div>
				<SignUpForm />
			</div>
		</div>
	);
};

export default Authentication;
