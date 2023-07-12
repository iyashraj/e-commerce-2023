import './App.css';
import { useRoutes, Outlet, Router, BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/route';

function App() {
  return (
    <BrowserRouter>
    <h1>Welcome to e-yug</h1>
    <Routes />
    </BrowserRouter>
  )
}

export default App
