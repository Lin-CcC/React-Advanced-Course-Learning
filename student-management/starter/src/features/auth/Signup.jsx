import { useNavigate } from 'react-router-dom';

export function Signup() {
  const navigate = useNavigate();

  return (
    <div className="auto-cols-auto grid h-screen w-full place-items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
        />

        <button
          className="btn btn-neutral mt-4"
          onClick={() => {
            navigate('/login');
          }}
        >
          Signup
        </button>
      </fieldset>
    </div>
  );
}
export default Signup;
