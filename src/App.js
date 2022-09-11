import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './sass/main.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Content from './pages/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

import PeliState from './context/pelis/peliState'
function App() {
  return (
    <PeliState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contenido' element={<Content />} />
        </Routes>
      </Router>
    </PeliState>
  );
}

export default App;
