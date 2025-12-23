'use client';

import { useState } from 'react';
import { Template } from '@/lib/templates';
import { Copy, Check, FileText } from 'lucide-react';
import Link from 'next/link';

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(template.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 group flex flex-col h-full">
      {/* Header */}
      <div className="p-5 border-b border-gray-100 bg-gray-50/50">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight">{template.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{template.specialty} • {template.clinic}</p>
            </div>
          </div>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mt-2">
          {template.conditions.slice(0, 3).map((condition) => (
            <span key={condition} className="px-2.5 py-1 text-xs font-medium bg-white border border-gray-200 text-gray-600 rounded-full shadow-sm">
              {condition}
            </span>
          ))}
          {template.conditions.length > 3 && (
            <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-500 rounded-full">
              +{template.conditions.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Content Preview */}
      <Link href={`/templates/${template.id}`} className="block flex-grow cursor-pointer group-hover:bg-gray-50/50 transition-colors">
        <div className="p-5 flex flex-col h-full">
          <div className="relative flex-grow">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-600 border border-gray-100 h-32 overflow-hidden relative">
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
              {template.content.slice(0, 150)}{template.content.length > 150 ? '...' : ''}
            </div>
            <div className="mt-2 text-center">
              <span className="text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View Full Template &rarr;
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <div className="p-4 pt-0 mt-auto">
        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${copied
            ? 'bg-green-50 text-green-700 border border-green-200'
            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
            }`}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied to Clipboard</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy Template</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
