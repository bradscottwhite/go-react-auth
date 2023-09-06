import { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    (
      async () => {
        const res = await fetch(`${import.meta.env.VITE_SERVER}/api/user`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'access-control-allow-origin, access-control-allow-headers',
            'Content-Type': 'application/json'
          },
          credentials: 'include',
        });

        const content = await res.json();

        setName(content.name);
      }
    )();
  }, []);


  return (
    <div className='App'>
      <BrowserRouter>
        <Nav name={name} setName={setName} />

        <main className='form-signin'>
          <Routes>
            <Route path='/go-react-auth/' element={<Home name={name} />} />
            <Route path='/go-react-auth/login' element={<Login setName={setName} />} />
            <Route path='/go-react-auth/register' element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
