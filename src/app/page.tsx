"use client"
import Image from "next/image";
import React, { useState } from 'react';
import SentimentInput from '@/components/SentimentInput';
import PhysicsTest from '@/components/PhysicsTest'; // Adjust path if needed

export default function Home() {
    const [wordDataList, setWordDataList] = useState<any[]>([]); // We'll manage all words here

    const handleNewWord = (newWord: any) => {
        // For now, let's just log the results to the console!
        console.log("New Word Analyzed:", newWord);

        // In the next task, we will update the state with this:
        // setWordDataList(prev => [...prev, newWord]);
    };
  return (
    <main className="min-h-screen p-8">
    {/* GRID CONTAINER: Now supports 1, 2, or 3 columns */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* GRID ITEM 1: Rectangular Aspect Ratio */}
        <div className="relative aspect-video">
    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 p-0 rounded-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer overflow-hidden">

        {/* INJECT THE TEST COMPONENT HERE */}
        <PhysicsTest /> 

        {/* Overlay the title outside the canvas area for clarity */}
        <div className="absolute top-2 left-4">
            <h2 className="text-xl font-semibold text-black dark:text-white">1. Physics Test</h2>
        </div>

    </div>
</div>

        {/* GRID ITEM 2: Rectangular Aspect Ratio */}
        <div className="relative aspect-video">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">2. NurtureNet</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    The Tamagotchi-style ChatBot AI.
                </p>
            </div>
        </div>
        
        {/* GRID ITEM 3: Rectangular Aspect Ratio */}
        <div className="relative aspect-video">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">3. The Maze</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Stealth game navigating a resume through a maze.
                </p>
            </div>
        </div>

        {/* GRID ITEM 4: Rectangular Aspect Ratio */}
        <div className="relative aspect-video">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">4. About Me</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Demonstrating "Temperature" via a bio generator.
                </p>
            </div>
        </div>

        {/* GRID ITEM 5: Rectangular Aspect Ratio */}
        <div className="relative aspect-video">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">5. Prompt-a-Platformer</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Changing level attributes based on keywords.
                </p>
            </div>
        </div>

    </div>
</main>
  );
}
