
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './shared/components/navbar/Navbar.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

function App() {
  
  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
      <AppRoutes/>      
      </BrowserRouter>
      
    </>
  )
}

export default App
