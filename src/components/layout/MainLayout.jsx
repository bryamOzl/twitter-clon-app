import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Trends from "./Trends";

export default function MainLayout() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="hidden md:flex md:flex-col md:w-64 bg-white border-r p-4">
                <h2 className="text-xl font-bold mb-4">Sidebar</h2>
                <nav className="flex flex-col gap-3">
                    <a href="#" className="hover:bg-gray-200 p-2 rounded">Inicio</a>
                    <a href="#" className="hover:bg-gray-200 p-2 rounded">Explorar</a>
                    <a href="#" className="hover:bg-gray-200 p-2 rounded">Notificaciones</a>
                </nav>
            </aside>

            {/* Feed */}
            <main className="flex-1 p-4">
                <Feed />
            </main>

            {/* Trends */}
            <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-l p-4">
                <h2 className="text-xl font-bold mb-4">Trends</h2>
                <ul className="flex flex-col gap-2">
                    <li className="hover:bg-gray-200 p-2 rounded">#ReactJS</li>
                    <li className="hover:bg-gray-200 p-2 rounded">#TailwindCSS</li>
                    <li className="hover:bg-gray-200 p-2 rounded">#JavaScript</li>
                </ul>
            </aside>
        </div>
    );
}