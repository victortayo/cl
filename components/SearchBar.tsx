'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onSubmit?: () => void;
}

export default function SearchBar({ onSearch, onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
      </div>
      <input
        type="text"
        placeholder="Search by condition, symptom, or clinic..."
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-xl leading-5 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out text-base sm:text-lg"
      />
    </div>
  );
}
