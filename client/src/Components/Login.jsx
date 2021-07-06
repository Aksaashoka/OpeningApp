import React, {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import firebase from '../Integrations/FirebaseConfig.js';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import {signIn} from '../redux/actions';
import {IoCloseSharp} from 'react-icons/io5';
import './Login.css';
const ui = new firebaseui.auth.AuthUI(firebase.auth());

function Login({setLogin, setAccount}) {
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		const uiConfig = {
			callbacks: {
				signInSuccessWithAuthResult: function (authResult) {
					setLogin(false);
					setAccount(false);
					let user = authResult.user;
					dispatch(signIn(user))
						.then((data) => {
							//data.type === 'SIGN_IN_SUCCESS' && history.push('/profile');
							// CUANDO HAYA PROFILE LO DESCOMENTAMOS
						})
						.catch((err) => console.log(err)); // PONER ALERTA COPADA
				},
				uiShown: function () {
					document.getElementById('loader').style.display = 'none';
				},
			},
			signInFlow: 'popup',
			signInSuccessUrl: '/home',
			signInOptions: [
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				firebase.auth.FacebookAuthProvider.PROVIDER_ID,
				firebase.auth.TwitterAuthProvider.PROVIDER_ID,
			],
			tosUrl: '<your-tos-url>',
			privacyPolicyUrl: '<your-privacy-policy-url>',
		};
		const firebaseUi = document.querySelector('#firebaseui-auth-container');
		firebaseUi && ui.start('#firebaseui-auth-container', uiConfig);
	}, []);

	return (
		<div className='login-container'>
			<IoCloseSharp className='btn-close' onClick={() => setLogin(false)} />
			<h4>
				Registrarse e iniciar sesión <br />
				¡En un sólo paso!
			</h4>

			<div id='firebaseui-auth-container'></div>
			<div id='loader'>Loading...</div>
		</div>
	);
}

export default Login;
