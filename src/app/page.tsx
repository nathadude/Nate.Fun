import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* GRID CONTAINER*/
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* GRID ITEM 1 */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Word Play</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Physics-block style toy where words have physical weight/interaction based on emotion.
          </p>
        </div>

        {/* GRID ITEM 2 */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">NurtureNet</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The Tamagotchi-style ChatBot AI.
          </p>
        </div>

        {/* GRID ITEM 3 */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">The Maze</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Stealth game navigating a resume through a maze.
          </p>
        </div>

        {/* GRID ITEM 4 */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Demonstrating "Temperature" via a bio generator.
          </p>
        </div>

        {/* GRID ITEM 5 */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Prompt-a-Platformer</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Changing level attributes based on keywords.
          </p>
        </div>
      </div>}  
    </main>
  );
}
