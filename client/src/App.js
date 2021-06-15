import './App.css';
import Player from './Components/Player';
import AudioUploader from './Components/AudioUploader';

function App() {
  return (
    <div className="paginacompleta">
      <AudioUploader/>
      <Player/>

    </div>
  );
}

export default App;
