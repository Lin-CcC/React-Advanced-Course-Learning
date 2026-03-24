export function StudentItem() {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Yancy Tear</div>
            <div className="text-sm opacity-50">Brazil</div>
          </div>
        </div>
      </td>
      <td>
        Class 1 | Year 6
        <br />
        <span className="badge badge-ghost badge-sm">Alex</span>
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
