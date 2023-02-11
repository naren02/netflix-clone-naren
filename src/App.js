import './App.css';
import NavBar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import RowPost from './components/rowpost/rowpost';
import { originals , action, romance , science_fiction , horror , animation, comady } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix originals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={romance} title='Romantic films' isSmall />
      <RowPost url={science_fiction} title='Popular sci-fi films' isSmall />
      <RowPost url={horror} title='Popular horror films' isSmall />
      <RowPost url={animation} title='Popular animated films' isSmall />
      <RowPost url={comady} title='Popular comedies' isSmall />


    </div>
  );
}

export default App;
