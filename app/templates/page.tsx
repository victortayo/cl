<<<<<<< HEAD
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { templates } from '@/lib/templates';
import { specialties } from '@/lib/specialties';
import TemplateCard from '@/components/TemplateCard';
import SearchBar from '@/components/SearchBar';
import SpecialtyFilter from '@/components/SpecialtyFilter';

export default function TemplatesPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [filteredTemplates, setFilteredTemplates] = useState(templates);

  useEffect(() => {
    // Update from URL params
    const query = searchParams.get('q') || '';
    const specialty = searchParams.get('specialty') || '';
    setSearchQuery(query);
    setSelectedSpecialty(specialty);

    // Filter templates
    let results = templates;

    if (specialty) {
      results = results.filter((t) => t.specialty === specialty);
    }

    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (t) =>
          t.title.toLowerCase().includes(lowerQuery) ||
          t.conditions.some((c) => c.toLowerCase().includes(lowerQuery)) ||
          t.symptoms.some((s) => s.toLowerCase().includes(lowerQuery)) ||
          t.clinic.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredTemplates(results);
  }, [searchParams]);

  const specialtyName =
    specialties.find((s) => s.id === selectedSpecialty)?.name || '';

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Templates</h1>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Templates
              </label>
              <SearchBar onSearch={setSearchQuery} />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <SpecialtyFilter
                selectedSpecialty={selectedSpecialty}
                onSpecialtyChange={setSelectedSpecialty}
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {specialtyName ? `${specialtyName} Templates` : 'All Templates'}
              {searchQuery && ` - "${searchQuery}"`}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {filteredTemplates.length === 0
                ? 'No templates found. Templates will appear here once they are added.'
                : `${filteredTemplates.length} template${filteredTemplates.length === 1 ? '' : 's'} found`}
            </p>
          </div>

          {filteredTemplates.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Templates Yet
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Templates are being prepared. Check back soon or browse a different specialty.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
=======
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { templates } from '@/lib/templates';
import { specialties } from '@/lib/specialties';
import TemplateCard from '@/components/TemplateCard';
import SearchBar from '@/components/SearchBar';
import SpecialtyFilter from '@/components/SpecialtyFilter';

export default function TemplatesPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [filteredTemplates, setFilteredTemplates] = useState(templates);

  useEffect(() => {
    // Update from URL params
    const query = searchParams.get('q') || '';
    const specialty = searchParams.get('specialty') || '';
    setSearchQuery(query);
    setSelectedSpecialty(specialty);

    // Filter templates
    let results = templates;

    if (specialty) {
      results = results.filter((t) => t.specialty === specialty);
    }

    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (t) =>
          t.title.toLowerCase().includes(lowerQuery) ||
          t.conditions.some((c) => c.toLowerCase().includes(lowerQuery)) ||
          t.symptoms.some((s) => s.toLowerCase().includes(lowerQuery)) ||
          t.clinic.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredTemplates(results);
  }, [searchParams]);

  const specialtyName =
    specialties.find((s) => s.id === selectedSpecialty)?.name || '';

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Templates</h1>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Templates
              </label>
              <SearchBar onSearch={setSearchQuery} />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <SpecialtyFilter
                selectedSpecialty={selectedSpecialty}
                onSpecialtyChange={setSelectedSpecialty}
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {specialtyName ? `${specialtyName} Templates` : 'All Templates'}
              {searchQuery && ` - "${searchQuery}"`}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {filteredTemplates.length === 0
                ? 'No templates found. Templates will appear here once they are added.'
                : `${filteredTemplates.length} template${filteredTemplates.length === 1 ? '' : 's'} found`}
            </p>
          </div>

          {filteredTemplates.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Templates Yet
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Templates are being prepared. Check back soon or browse a different specialty.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
>>>>>>> 31dc2ae (first commit)
