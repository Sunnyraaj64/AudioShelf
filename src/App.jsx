import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThankyouPage from './pages/ThankyouPage';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/thankyou" element={<ThankyouPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
