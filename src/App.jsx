import { Route, Routes } from 'react-router-dom';
import './css/App.css'
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import NavBar from './components/NavBar'
function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
