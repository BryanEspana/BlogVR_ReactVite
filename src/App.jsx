import './App.css'
import Layout from './components/layout';
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route  index element={<Home />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
