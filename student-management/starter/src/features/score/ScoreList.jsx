import ScoreItem from './ScoreItem';

export function ScoreList() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-lg">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Semester</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <ScoreItem />
        </tbody>
      </table>
    </div>
  );
}
export default ScoreList;
