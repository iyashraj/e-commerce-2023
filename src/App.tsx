import './App.css';
import { useRoutes, Outlet, Router, BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/route';

function App() {
  return (
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
  )
}

export default App
