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
        } catch (error) {
          console.error('Error fetching search results', error);
        }
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchResults();
      if (query.length > 0) {
        router.push(`/search/${query}`);
      }
    }, 300); // Menambahkan penundaan untuk debounce

    return () => clearTimeout(delayDebounceFn);
  }, [query, router]);

  return (
    <div className="relative text-gray-600 w-full sm:w-auto">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm w-full sm:w-64 focus:outline-none"
        ref={searchRef}
        onChange={(e) => setQuery(e.target.value)} // Memperbarui query untuk memicu useEffect
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-2.5 mr-4"
        onClick={(e) => {
          e.preventDefault();
          router.push(`/search/${query}`);
        }}
      >
        <FaMagnifyingGlass />
      </button>
    </div>
  );
};

export default Search;
