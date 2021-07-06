import React, {useState} from 'react';
import './Account.css';
import {Link, useHistory} from 'react-router-dom';
import Login from './Login';
import {IoCloseSharp} from 'react-icons/io5';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../Utils/Auth.js';

function Account({setAccount}) {
	const user = useSelector((state) => state.user);
	const history = useHistory();
	const dispatch = useDispatch();
	const [login, setLogin] = useState(false);
	return (
		<div>
			<div
				className={'hover-container'}
				onMouseLeave={() => !login && setAccount(false)}
			>
				<IoCloseSharp onClick={() => setAccount(false)} className='btn-close' />
				{user ? (
					<div className='account-profile-container'>
						<Link to='/profile'>
							<button className='btn'>Mi cuenta</button>
						</Link>
						<button className='btn' onClick={() => signOut(history, dispatch)}>
							Log out
						</button>
					</div>
				) : (
					<button onClick={() => setLogin(true)} className='btn'>
						Log in
					</button>
				)}
			</div>
			{login && <Login setLogin={setLogin} setAccount={setAccount} />}
		</div>
	);
}

export default Account;
