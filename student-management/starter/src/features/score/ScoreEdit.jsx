import { useEffect, useState } from 'react';
import { useLocation } from 'react-use';
import {
  getScoreById,
  updateScoreById,
  updateSemesterById,
} from '../../services/apiScore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function ScoreEdit() {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [subject, setSubject] = useState('');
  const [semester, setSemester] = useState('');
  const [score, setScore] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  //如何设置年份的下拉框内容？这里用到了一种新的创建数组的方式
  //这个函数代表的是每一个元素生成的逻辑，index对应的是每一个元素的索引，索引值是0开始的，
  const yearList = Array.from(
    { length: new Date().getFullYear() - 2000 + 1 },
    (_, i) => 2000 + i,
  );
  const path = location.pathname;
  const id = Number(path.split('/').slice(-1)[0]);
  useEffect(() => {
    const scoreData = getScoreById(id);
    if (scoreData) {
      setName(scoreData.name);
      setClassName(scoreData.class);
      setSubject(scoreData.subject);
      setSemester(scoreData.semester);
      setScore(scoreData.score.toString());
    }
  }, [location.pathname]);
  return (
    <div className="card bg-base-100 w-96 shadow-lg max-w-md rounded-lg p-4 mx-auto mt-5 items-center">
      <div className="card-body items-center text-center">
        <h2 className="card-title mb-3">Edit Score</h2>
        <label className="input mb-1">
          name
          <input type="text" className="grow" value={name} disabled />
        </label>
        <label className="input mb-1">
          Class
          <input type="text" className="grow" value={className} disabled />
        </label>
        <label className="input mb-1">
          Subject
          <input type="text" className="grow" value={subject} disabled />
        </label>
        <select
          defaultValue={semester}
          className="select appearance-none"
          onChange={(e) => setSemester(e.target.value)}
        >
          <option disabled={true}>{semester}</option>
          {yearList.map((year) => (
            <div>
              <option key={`${year} spring`} value={`${year} spring`}>
                {year} spring
              </option>
              <option key={`${year} fall`} value={`${year} fall`}>
                {year} fall
              </option>
            </div>
          ))}
        </select>
        <label className="input mb-1">
          Score
          <input
            type="text"
            className="grow"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <span className="badge badge-neutral badge-xs">changeable</span>
        </label>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              updateScoreById(id, Number(score));
              updateSemesterById(id, semester);
              navigate('/score');
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
export default ScoreEdit;
