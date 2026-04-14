import { useEffect, useState } from 'react';
import { useLocation } from 'react-use';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  getStudentById,
  updateStudentById,
} from '../../services/apiStudentList';

export function StudentEdit() {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [semester, setSemester] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;
  const id = Number(path.split('/').slice(-1)[0]);
  useEffect(() => {
    const scoreData = getStudentById(id);
    if (scoreData) {
      setName(scoreData.name);
      setClassName(scoreData.class);
      setSemester(scoreData.semester);
      setAvatar(scoreData.avatar);
    }
  }, [location.pathname]);
  return (
    <div className="card bg-base-100 w-96 shadow-lg max-w-md rounded-lg p-4 mx-auto mt-5 items-center">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <label className="input mb-1">
          name
          <input type="text" className="grow" value={name} disabled />
        </label>
        <label className="input mb-1">
          Class
          <input type="text" className="grow" value={className} disabled />
        </label>
        <label className="input mb-1">
          Semester
          <input type="text" className="grow" value={semester} disabled />
        </label>

        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              updateStudentById(id, { avatar });
              navigate('/student');
              toast.success('update successfully');
            }}
          >
            update
          </button>
        </div>
      </div>
    </div>
  );
}
export default StudentEdit;
