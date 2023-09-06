import { Link } from 'react-router-dom';

const Nav = ({ name, setName }: { name: string, setName: (name: string) => void }) => {
  const logout = async () => {
    await fetch(`${import.meta.env.VITE_SERVER}/api/register`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'access-control-allow-origin, access-control-allow-headers',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    });

    setName('');
  }

  let menu;

  if (name === '') {
    menu = (
      <ul className='navbar-nav me-auto mb-2 mb-md-0'>
        <li className='nav-item active'>
          <Link to='/go-react-auth/login' className='nav-link'>Login</Link>
        </li>
        <li className='nav-item active'>
          <Link to='/go-react-auth/register' className='nav-link'>Register</Link>
        </li>
      </ul>
    )
  } else {
    menu = (
      <ul className='navbar-nav me-auto mb-2 mb-md-0'>
        <li className='nav-item active'>
          <Link to='/go-react-auth/login' className='nav-link' onClick={logout}>Logout</Link>
        </li>
      </ul>
    )
  }

  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
      <div className='container-fluid'>
        <Link to='/go-react-auth' className='navbar-brand'>Home</Link>

        <div>
          {menu}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
