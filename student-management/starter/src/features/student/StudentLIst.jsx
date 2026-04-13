import { useEffect, useState } from 'react';
import StudentItem from './StudentItem';
import { getStudentList } from '../../services/apiStudentList';

export function StudentList() {
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    const mockStudentList = getStudentList();
    setStudentList(mockStudentList);
  }, []);
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
          {/* <StudentItem /> */}
          {studentList.map((student) => (
            <StudentItem key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentList;
