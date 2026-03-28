import { useState } from 'react';

export function Info() {
  const [currentAvatar, setCurrentAvatar] = useState(
    'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
  );

  function handleAvatarChange(event) {
    const file = event.target.files[0];
    const newAvatarUrl = URL.createObjectURL(file);
    setCurrentAvatar(newAvatarUrl);
  }

  return (
    <div className="shadow-2xl shadow-blue-200  w-2/3 mx-auto flex flex-col items-center p-6 space-y-4 mt-10 rounded-lg">
      <div className="avatar my-4">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 ">
          <label htmlFor="avatar-input" className="cursor-pointer">
            <img src={currentAvatar} />
          </label>
        </div>
      </div>

      <label className="input validator w-full max-w-md">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </g>
        </svg>
        <input type="text" value="Alex" disabled />
      </label>

      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64 w-full max-w-md">
        <li>
          <details open>
            <summary>Class In Charge</summary>
            <ul className="[&_li>*]:cursor-default [&_li>*]:hover:bg-transparent [&_li>*]:active:bg-transparent [&_li>*]:pointer-events-none">
              <li className="opacity-50 cursor-not-allowed">
                <span>Class 10 | Year 9</span>
              </li>
              <li className="opacity-50 cursor-not-allowed">
                <span>Class 11 | Year 10</span>
              </li>
            </ul>
          </details>
        </li>
      </ul>

      <button className="btn btn-neutral">Update Info</button>

      {/* 和更新头像的功能相互绑定的input */}
      <input
        type="file"
        id="avatar-input"
        accept="image/*"
        onChange={handleAvatarChange}
        className="hidden"
      />
    </div>
  );
}
export default Info;
