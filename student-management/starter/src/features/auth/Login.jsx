import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="auto-cols-auto grid h-screen w-full place-items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />
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
