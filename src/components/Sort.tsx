import React from 'react';

interface ISort {
  sort: 'asc' | 'desc';
  setSort: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

export const Sort: React.FC<ISort> = ({ setSort, sort }) => {
  return (
    <div className="dropdown ">
      <label tabIndex={0} className="btn m-1">
        Sort ({sort})
      </label>
      <ul tabIndex={0} className="dropdown-content border border-white border-opacity-10  z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <button onClick={() => setSort('asc')}>Asc</button>
        </li>
        <li>
          <button onClick={() => setSort('desc')}>Desc</button>
        </li>
      </ul>
    </div>
  );
};
