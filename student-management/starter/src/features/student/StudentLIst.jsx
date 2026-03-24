import StudentItem from './StudentItem';

export function StudentList() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-lg">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 4 */}
          <StudentItem />
        </tbody>
      </table>
    </div>
  );
}
export default StudentList;
