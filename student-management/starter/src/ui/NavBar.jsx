import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-300 shadow-sm">
      {/* dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-xl lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-2xl"
          >
            <li>
              <a
                onClick={() => {
                  navigate('/student');
                }}
                className={pathname === '/student' ? 'menu-active' : ''}
              >
                Student
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate('/score');
                }}
                className={pathname === '/score' ? 'menu-active' : ''}
              >
                Score
              </a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost text-3xl"
          onClick={() => {
            navigate('/');
          }}
        >
          daisyUI
        </a>
      </div>

      {/* web links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl">
          <li>
            <a
              onClick={() => {
                navigate('/student');
              }}
              className={pathname === '/student' ? 'menu-active' : ''}
            >
              student
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate('/score');
              }}
              className={pathname === '/score' ? 'menu-active' : ''}
            >
              score
            </a>
          </li>
        </ul>
      </div>

      {/* avatar */}
      {/* <div className="navbar-end">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
      </div> */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost avatar">
            <div className="w-17 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-2xl"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate('/login');
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
