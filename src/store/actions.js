// services
import AuthService from '@/services/auth.js';

export default {
	createUser: ({commit}) => {
        console.log('store: createUser');
		// return new Promise((resolve, reject) => {
		// 	AuthService.createUser('pevangelist516@gmail.com', '1234paul')
		// 	   .then(user => {
		// 		  console.log(user);
		// 		  resolve(user);
		// 	   })
		// 	   .catch(err => {
		// 		    console.error(err);
		// 	   		reject(err);
		// 		})
		// });
	},

	registerUser: ({commit}, payload) => {
		console.log('registerUser: ', payload);
		AuthService.signUpUser(payload.email);
	}
};