import './App.css';
import Player from './Components/Player';
import AudioUploader from './Components/AudioUploader';
import {Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
	return (
		<div className='paginacompleta'>
			<Route exact path='/'>
				<Landing />
			</Route>
			<Route path='/home'>
				<Home />
			</Route>
			<Route exact path='/login' component={Login} />
			<Route path='/player'>
				<Player />
			</Route>
			<Route path='/upload_Track'>
				<AudioUploader />
			</Route>
		</div>
	);
}

export default App;
