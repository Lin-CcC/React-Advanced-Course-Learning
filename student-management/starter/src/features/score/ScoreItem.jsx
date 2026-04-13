export function ScoreItem({ scoreItem }) {
  return (
    <tr>
      <th>{scoreItem.name}</th>
      <td>{scoreItem.class}</td>
      <td>{scoreItem.subject}</td>
      <td>{scoreItem.semester}</td>
      <td>{scoreItem.score}</td>
      <td>
        <button className="btn btn-ghost btn-sm mr-1">details</button>
        <button className="btn btn-ghost btn-sm btn-soft btn-error">
          delete
        </button>
      </td>
    </tr>
  );
}
export default ScoreItem;
