
'use client'

import React, { useState , CSSProperties} from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  onSearch: (query: string) => void;
}


function SearchMovie({ onSearch }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState('');


  const handleSearch = () => {
    if (searchQuery.trim() === '') { // Step 2
      setError('Please enter a movie title.');
    } else {
      setError(''); 
      onSearch(searchQuery);
    }



  };

  return (
 <div className="mb-3">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      className="relative m-0 -mr-0.5 block w-[1px] text-white min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white-500 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search for a movie by title"
      aria-label="Search for a movie by title"
      aria-describedby="button-addon1"
      value={searchQuery} 
      onChange={(e) => setSearchQuery(e.target.value)} 
    />

    <button
      onClick={handleSearch}
      className="relative z-[2] flex items-center rounded-r bg-blue-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    
  </div>
  {error && <p className="text-white-500 text-center">{error}</p>} 

</div> 






    
  );
}

export default SearchMovie;
