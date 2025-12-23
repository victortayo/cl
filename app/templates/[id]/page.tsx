'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { templates } from '@/lib/templates';
import { ArrowLeft, Copy, Check, Calendar, User } from 'lucide-react';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function TemplatePage(props: PageProps) {
    const params = use(props.params);
    const [copied, setCopied] = useState(false);
    const router = useRouter();

    const template = templates.find((t) => t.id === params.id);

    if (!template) {
        notFound();
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(template.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Navigation */}
                <div className="mb-6">
                    <Link
                        href="/templates"
                        className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Search
                    </Link>
                </div>

                {/* content card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

                    {/* Header */}
                    <div className="bg-white border-b border-gray-100 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{template.title}</h1>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <span className="font-medium text-gray-700">Specialty:</span> {template.specialty}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="font-medium text-gray-700">Clinic:</span> {template.clinic}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={handleCopy}
                                className={`p-3 rounded-xl transition-all shadow-sm ${copied
                                    ? 'bg-green-100 text-green-700 ring-1 ring-green-200'
                                    : 'bg-white text-gray-500 border border-gray-200 hover:border-blue-500 hover:text-blue-600'
                                    }`}
                                title="Copy Template"
                            >
                                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                            </button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {template.conditions.map((condition) => (
                                <span key={condition} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                    {condition}
                                </span>
                            ))}
                            {template.symptoms.map((symptom) => (
                                <span key={symptom} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                    {symptom}
                                </span>
                            ))}
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-6 mt-6 pt-4 border-t border-gray-50 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>Contributor: <span className="text-gray-600 font-medium">{template.contributor}</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>Last Updated: <span className="text-gray-600 font-medium">{template.lastModified}</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Template Body */}
                    <div className="p-0 bg-gray-900">
                        <div className="overflow-x-auto">
                            <pre className="whitespace-pre-wrap font-mono text-gray-300 text-sm leading-relaxed p-6 md:p-8">
                                {template.content}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
