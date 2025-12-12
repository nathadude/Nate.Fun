"use client" 
import React, { useState, useCallback } from 'react';
import sentiment from 'sentiment';

// Define the shape of the word data we will pass to the physics engine
interface WordData {
    id: number;
    text: string;
    score: number;
    sentiment: 'positive' | 'negative' | 'neutral';
}

// We need to define the prop the parent component will pass down (the setter function)
interface SentimentInputProps {
    onWordAnalyzed: (data: WordData) => void;
}

const SentimentInput: React.FC<SentimentInputProps> = ({ onWordAnalyzed }) => {
    const [text, setText] = useState('');

    const handleAnalyze = useCallback(() => {
        if (!text.trim()) return; // Don't analyze empty input

        // 1. Perform Sentiment Analysis
        const analyzer = new sentiment(); // Create an instance
        const result = analyzer.analyze(text); // Call the analyze method on the instance
        const score = result.score;
        
        // 2. Determine Sentiment Category
        let sentimentCategory: WordData['sentiment'];
        if (score > 1) {
            sentimentCategory = 'positive';
        } else if (score < -1) {
            sentimentCategory = 'negative';
        } else {
            sentimentCategory = 'neutral';
        }

        // 3. Create the Data Object
        const newWordData: WordData = {
            id: Date.now(), // Unique ID for the key/physics body
            text: text.trim(),
            score: score,
            sentiment: sentimentCategory,
        };

        // 4. Pass the Data back to the Parent Component (the setter function)
        onWordAnalyzed(newWordData);
        
        // 5. Clear the input
        setText('');
    }, [text, onWordAnalyzed]);
    
    // Handle Enter key press
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAnalyze();
        }
    };

    return (
        <div className="flex gap-4 p-4 rounded-lg bg-[#202020] shadow-lg">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a word or phrase (e.g., 'Love' or 'Terrible')"
                className="flex-grow p-2 rounded-md bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleAnalyze}
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
                Drop Word
            </button>
        </div>
    );
};

export default SentimentInput;