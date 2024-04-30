import './App.css'
import Home from './pages/home'

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  )
}

export default App
