"use client" 
// src/app/sentiment-physics/page.tsx

import React, { useState } from 'react';
import SentimentInput from '@/components/SentimentInput';
import SentimentPhysicsEngine from '@/components/SentimentPhysicsEngine'; 

// Define the shape of the word data (You can paste this from SentimentInput.tsx)
interface WordData {
    id: number;
    text: string;
    score: number;
    sentiment: 'positive' | 'negative' | 'neutral';
}

export default function SentimentPhysicsPage() {
  // 1. State Management lives here
  const [wordDataList, setWordDataList] = useState<WordData[]>([]);

  const handleNewWord = (newWord: WordData) => {
    setWordDataList((prev) => [...prev, newWord]);
  };

  return (
    // 2. Main layout for the project page
    <main className="min-h-screen p-8 flex flex-col items-center bg-[#0d0d0d]">
      <div className="w-full max-w-5xl flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold text-white text-center mb-4">
              Sentiment Physics: Word Weight
          </h1>

          {/* Input Component */}
          <SentimentInput onWordAnalyzed={handleNewWord} />

          {/* Physics Display */}
          <div className="relative aspect-video w-full rounded-xl bg-zinc-900 shadow-2xl overflow-hidden">
              <SentimentPhysicsEngine words={wordDataList} />
          </div>

          {/* Optional: Simple explanation */}
          <p className="text-zinc-500 text-center mt-4">
              Type a phrase. Positive words (green) are lighter and more bouncy. Negative words (red) are heavier and denser.
          </p>
      </div>
    </main>
  );
}