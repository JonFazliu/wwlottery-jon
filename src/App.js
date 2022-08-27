import { Route, Navigate, Routes} from 'react-router-dom'

import MainNavigation from "./Components/Navigation/MainNavigation";
import HomePage from './Pages/Home';
import WinnersPage from './Pages/Winners';
import SessionPlayersPage from './Pages/SessionPlayers';
import StatsPage from './Pages/Stats';

function App() {

  // has the header, and the routes. Makes the / path navigate you to /home directly
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/winners" element={<WinnersPage />}/>
        <Route path="/session-players" element={<SessionPlayersPage />}/>
        <Route path="/stats" element={<StatsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
