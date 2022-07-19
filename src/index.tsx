/* @refresh reload */
import { render } from 'solid-js/web';

import './frontend/styles/index.css';
import App from './frontend/routes/App';
import Browse from './frontend/routes/Browse';
import Leaderboard from './frontend/routes/Leaderboard';
import Profile from './frontend/routes/Profile';
import { Route, Router, Routes } from 'solid-app-router';

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
