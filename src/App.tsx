import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path="/" element = {<Home />} />
          <Route index path="/courses/:coursesId" element = {<Home />} />
          <Route index path="/cart" element = {<Home />} />
          <Route index path="/login" element = {<Home />} />
          <Route index path="/signup" element = {<Home />} />
          <Route index path="*" element = {<Home />} />
        </Routes>   
      </div>
    </BrowserRouter>
  )
}

export default App
