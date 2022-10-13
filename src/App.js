import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<DashboardPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Navigate to="/" />
      </Routes>
    </Router>
  );
};

export default App;
