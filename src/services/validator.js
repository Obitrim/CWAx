export default {
	validEmail(email){
		if(email == undefined){
			throw new Error('validEmail: email not provided');
		}
		let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regExp.test(email.trim());
	},

	validUsername(username){
		if(username == undefined){
			throw new Error('validUsername: username argument required, none provided');
		}
		return username.trim().length > 5;
	},

	passwordMatched(password, confirmationPassword){
		if(!password || !confirmationPassword){
			throw new Error(`Arguments Error: two arguments expected. ${password} and ${confirmationPassword} provided`);
		}

		return password.trim() == confirmationPassword.trim();
	}
};