/* @refresh reload */
import { render } from 'solid-js/web';
import '@fontsource/libre-franklin';
import './frontend/styles/index.css';
import App from './frontend/routes/App';
import Hub from './frontend/routes/Hub';
import Leaderboard from './frontend/routes/Leaderboard';
import Profile from './frontend/routes/Profile';
import { Route, Router, Routes } from '@solidjs/router';

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
