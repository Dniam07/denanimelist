'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const Search = () => {
  const router = useRouter();
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length > 0) {
        try {
          // Add your fetching logic here if needed
        } catch (error) {
          console.error('Error fetching search results', error);
        }
      } else {
        router.push('/');
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchResults();
      if (query.length > 0) {
        router.push(`/search/${query}`);
      }
    }, 300); // Adding delay for debounce

    return () => clearTimeout(delayDebounceFn);
  }, [query, router]);

  return (
    <div className="relative text-gray-600 w-full sm:w-auto">
      <form >
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm w-full sm:w-64 focus:outline-none"
          ref={searchRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query to trigger useEffect
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-2.5 mr-4"
        >
          <FaMagnifyingGlass />
        </button>
      </form>
    </div>
  );
};

export default Search;
