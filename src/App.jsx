import { Route } from 'react-router';
import './App.css';
import { BrowserRouter, Routes } from 'react-router';
import { Home } from './pages/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
