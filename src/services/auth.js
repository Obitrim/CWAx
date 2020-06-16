import { auth } from '@/main.js';

export default {
	createAccount(email, password){
		return new Promise((resolve, reject) => {
			auth.createUserWithEmailAndPassword(email, password).then(res => {
				resolve(res.user);
			}).catch(err => {
				reject(err);
			})
		});
	},

	signUpUser(email){
		if(!email){
			throw new Error('Email required. None provided');
		}
		var actionCodeSettings = {
		  url: 'https://cwax-e3fc6.firebaseapp.com',
		  handleCodeInApp: true,
		  iOS: {
		    bundleId: 'com.example.ios'
		  },
		  android: {
		    packageName: 'com.example.android',
		    installApp: true,
		    minimumVersion: '12'
		  },
		  dynamicLinkDomain: 'cwax-e3fc6.firebaseapp.com/register'
		};

		auth.sendSignInLinkToEmail(email, actionCodeSettings).then(() => {
			console.log('successful');
		}).catch(error => console.error(error))
	}
};