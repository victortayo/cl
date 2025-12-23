'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import SpecialtyFilter from '@/components/SpecialtyFilter';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const navigateToResults = (query: string, specialty: string) => {
    const params = new URLSearchParams();
    if (query) params.append('q', query);
    if (specialty) params.append('specialty', specialty);
    router.push(`/templates?${params.toString()}`);
  };

  const handleSearchSubmit = () => {
    navigateToResults(searchQuery, selectedSpecialty);
  };

  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialty(specialty);
    // Optional: immediate navigation on specialty change
    navigateToResults(searchQuery, specialty);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-3xl opacity-60 mix-blend-multiply" />
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-teal-100/50 blur-3xl opacity-60 mix-blend-multiply" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-indigo-100/50 blur-3xl opacity-60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center text-center">

        {/* Brand / Hero Header */}
        <div className="mb-12 space-y-4">

          <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-gray-900">
            Clerkly
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Patients' notes.
          </p>
        </div>

        {/* Search Interaction */}
        <div className="w-full max-w-3xl glass-panel rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-xl bg-white/60 shadow-2xl border-white/50">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full flex-grow">
              <SearchBar
                onSearch={setSearchQuery}
                onSubmit={handleSearchSubmit}
              />
            </div>
            <div className="w-full md:w-auto flex-shrink-0">
              <SpecialtyFilter
                selectedSpecialty={selectedSpecialty}
                onSpecialtyChange={handleSpecialtyChange}
              />
            </div>
          </div>


        </div>

      </div>
    </main>
  );
}
