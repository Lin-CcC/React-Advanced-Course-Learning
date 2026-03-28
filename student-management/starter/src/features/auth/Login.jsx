import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="auto-cols-auto grid h-screen w-full place-items-center ">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-xl/30">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input type="email" placeholder="Email" />
        </label>

        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input type="password" placeholder="Password" />
        </label>
        <label className="label">
          <input type="checkbox" defaultChecked className="checkbox" />
          Remember me
        </label>

        <div className="grid grid-cols-2 gap-4">
          <button
            className="btn btn-neutral mt-4"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Signup
          </button>
          <button
            className="btn btn-neutral mt-4"
            onClick={() => {
              navigate('/');
            }}
          >
            Login
          </button>
        </div>
      </fieldset>
    </div>
  );
}
export default Login;
