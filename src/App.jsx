import { Route } from 'react-router';
import './App.css';
import { BrowserRouter, Routes } from 'react-router';
import { Home } from './pages/Home';
import { DisProgram } from './pages/DisProgram';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/disProgram" element={<DisProgram />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
