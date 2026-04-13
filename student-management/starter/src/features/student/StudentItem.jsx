export function StudentItem({ student }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={student.avatar}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{student.name}</div>
            <div className="text-sm opacity-50">{student.class}</div>
          </div>
        </div>
      </td>
      <td>
        {student.subject} | {student.semester}
        <br />
        <span className="badge badge-ghost badge-sm">{student.score}</span>
      </td>
      <th>
        <button className="btn btn-ghost btn-sm mr-1">details</button>
        <button className="btn btn-ghost btn-sm btn-soft btn-error">
          delete
        </button>
      </th>
    </tr>
  );
}
export default StudentItem;
