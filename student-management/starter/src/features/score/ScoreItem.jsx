import { useNavigate } from 'react-router-dom';

export function ScoreItem({ scoreItem }) {
  const navigate = useNavigate();
  return (
    <tr>
      <th>{scoreItem.name}</th>
      <td>{scoreItem.class}</td>
      <td>{scoreItem.subject}</td>
      <td>{scoreItem.semester}</td>
      <td>{scoreItem.score}</td>
      <td>
        <button
          className="btn btn-ghost btn-sm mr-1"
          onClick={() => navigate(`/score/${scoreItem.id}`)}
        >
          details
        </button>
        <button className="btn btn-ghost btn-sm btn-soft btn-error">
          delete
        </button>
      </td>
    </tr>
  );
}
export default ScoreItem;
