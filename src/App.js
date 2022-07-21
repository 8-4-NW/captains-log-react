import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import LogEdit from './LogEdit';
import Logs from './Logs';
import LogNew from './LogNew';
import LogDetail from './LogDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/logs/new" element={<LogNew />} />
            <Route path="/logs/:index" element={<LogDetail />} />
            <Route path="/logs/:index/edit" element={<LogEdit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
