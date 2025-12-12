"use client"
// This page is mostly layout, but using Link and client-side hover effects means 
// it's best to mark it as a Client Component for simplicity.

import React from 'react';
import Link from 'next/link';

// --- Component for a Single Project Tile ---
// This ensures all your tiles look consistent and handle the Link wrapper correctly.
interface ProjectTileProps {
    title: string;
    description: string;
    href: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ title, description, href }) => (
    <Link href={href} passHref>
        <div className="relative aspect-video">
            {/* The inner div holds all the styling and interaction */}
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer flex flex-col justify-end">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {description}
                </p>
            </div>
        </div>
    </Link>
);

// --- Main Page Component ---
export default function Home() {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-4xl font-extrabold text-center mb-12 text-white">
                The Digital Playground
            </h1>
            
            {/* GRID CONTAINER: Responsive 1, 2, or 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                
                {/* 1. Sentiment Physics (Your First Completed Link) */}
                <ProjectTile
                    title="1. Sentiment Physics"
                    description="Physics-block toy where words are given weight and buoyancy based on emotional score. (Matter.js + NLP)"
                    href="/sentiment-physics"
                />

                {/* 2. NurtureNet (Next Project) */}
                <ProjectTile
                    title="2. NurtureNet (The Promptling)"
                    description="A Tamagotchi-style AI/LLM experience exploring model training, data starvation, and hallucination."
                    href="/nurture-net"
                />

                {/* 3. Beat the ATS */}
                <ProjectTile
                    title="3. Beat the ATS (The Maze)"
                    description="A stealth game demonstrating A* pathfinding algorithms and object collision avoidance. (Game Design)"
                    href="/beat-the-ats"
                />

                {/* 4. The Hallucination Slider */}
                <ProjectTile
                    title="4. Hallucination Slider"
                    description="An interactive visualization of LLM 'Temperature' (creativity vs. coherence) on generated text."
                    href="/hallucination-slider"
                />

                {/* 5. Prompt-a-Platformer */}
                <ProjectTile
                    title="5. Prompt-a-Platformer"
                    description="Generate a playable platforming level on-the-fly based on text keywords. (Procedural Generation)"
                    href="/prompt-platformer"
                />
            </div>
            
            <footer className="text-center mt-20 text-zinc-600">
                Created by Nathaniel Anderson for the Love of AI & Interactive Design.
            </footer>
        </main>
    );
}

// Ensure the necessary component is created for NurtureNet (placeholder)
// You would also need to create placeholder directories for the other three projects:
// /src/app/nurture-net/page.tsx
// /src/app/beat-the-ats/page.tsx
// /src/app/hallucination-slider/page.tsx
// /src/app/prompt-platformer/page.tsx