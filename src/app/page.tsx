import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* GRID CONTAINER*/
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* GRID ITEM 1 */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Project One</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Description of project one.
          </p>
        </div>

        {/* GRID ITEM 2 */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Project Two</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Description of project two.
          </p>
        </div>

        {/* GRID ITEM 3 */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Project Three</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Description of project three.
          </p>
        </div>

        {/* GRID ITEM 4 */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Project Four</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Description of project four.
          </p>
        </div>

        {/* GRID ITEM 5 */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Project Five</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Description of project five.
          </p>
        </div>
      </div>}  
    </main>
  );
}
