import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
    {/* GRID CONTAINER: Now supports 1, 2, or 3 columns */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* GRID ITEM 1: Rectangular Aspect Ratio */}
        <div className="relative aspect-video">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">1. Sentiment Physics</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Physics-block style toy where words have physical weight/interaction based on emotion.
                </p>
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
