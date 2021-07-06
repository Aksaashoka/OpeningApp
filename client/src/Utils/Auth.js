import firebase from 'firebase/app';
import 'firebase/auth';
import {emptyUser} from '../redux/actions';

export const signOut = (history, dispatch) => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			dispatch(emptyUser());
			history.push('/home');
		})
		.catch((error) => {
			console.log(error); // Colocar alguna alerta copada
		});
};
