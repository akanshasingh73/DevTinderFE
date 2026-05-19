import { Link, useNavigate } from 'react-router-dom';
import { loggedOut } from '../../services/authService';
import { removeUser } from '../../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector((store) => store.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await loggedOut();
    dispatch(removeUser());
    navigate('/login');
  };

  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='flex-1'>
        <Link to='/feed' className='btn btn-ghost text-xl'>
          Dev Tinder
        </Link>
      </div>
      {user && (
        <div className='flex gap-2 items-center'>
          <p>Welcome! {user.name}</p>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full '>
                <img alt='Tailwind CSS Navbar component' src={user.photo} />
              </div>
            </div>
            <ul
              tabIndex='-1'
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              <li>
                <Link to='/profile' className='justify-between'>
                  Profile
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
