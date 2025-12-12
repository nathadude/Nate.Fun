// src/components/ProjectWIP.tsx

"use client";

import React from 'react';
import Link from 'next/link';

interface ProjectWIPProps {
    title: string;
    description: string;
    estimatedCompletion: string;
}

const ProjectWIP: React.FC<ProjectWIPProps> = ({ title, description, estimatedCompletion }) => {
    return (
        <main className="min-h-screen p-8 flex flex-col items-center justify-center bg-[#0d0d0d] text-white">
            <div className="max-w-xl w-full p-10 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl text-center">
                
                <h1 className="text-6xl font-extrabold text-yellow-400 mb-4">
                    🚧
                </h1>
                
                <h2 className="text-3xl font-bold mb-3">
                    Project {title}: Under Construction
                </h2>
                
                <p className="text-lg text-zinc-400 mb-6">
                    {description}
                </p>

                <div className="border-t border-zinc-700 pt-4 mb-6">
                    <p className="text-sm font-medium text-zinc-500">
                        Estimated to be live by: 
                        <span className="text-yellow-400 ml-2">{estimatedCompletion}</span>
                    </p>
                </div>
                
                <Link href="/" passHref>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                        Return to Digital Playground
                    </button>
                </Link>

            </div>
        </main>
    );
};

export default ProjectWIP;