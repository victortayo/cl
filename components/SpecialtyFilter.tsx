'use client';

import { specialties } from '@/lib/specialties';
import { ChevronDown } from 'lucide-react';

interface SpecialtyFilterProps {
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
}

export default function SpecialtyFilter({
  selectedSpecialty,
  onSpecialtyChange,
}: SpecialtyFilterProps) {
  return (
    <div className="relative w-full md:w-56">
      <div className="relative">
        <select
          id="specialty"
          value={selectedSpecialty}
          onChange={(e) => onSpecialtyChange(e.target.value)}
          className="appearance-none w-full pl-4 pr-10 py-4 bg-white border border-gray-200 rounded-xl text-md font-medium text-gray-700 shadow-sm hover:shadow-md focus:outline-none focus:bg-white input-ring cursor-pointer"
        >
          <option value="">All Specialties</option>
          {specialties.map((specialty) => (
            <option key={specialty.id} value={specialty.id}>
              {specialty.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
