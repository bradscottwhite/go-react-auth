import { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = ({ setName }: { setName: (name: string) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_SERVER}/api/login`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'access-control-allow-origin, access-control-allow-headers',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    });

    const content = await res.json();

    setRedirect(true);
    setName(content.name);
  }

  if (redirect) {
    return <Navigate to='/'/>;
  }

  return (
    <form onSubmit={submit}>
      <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
      <input type='email' className='form-control' placeholder='Email address' required
        onChange={e => setEmail(e.target.value)}
      />

      <input type='password' className='form-control' placeholder='Password' required
        onChange={e => setPassword(e.target.value)}
      />

      <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
    </form>
  );
};

export default Login;
