import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Trends from "./Trends";

export default function MainLayout() {
    return (
        <div className="h-screen w-full max-w-7xl mx-auto grid grid-cols-12">
            {/* Sidebar */}
            <aside className="col-span-2 border-r border-gray-200">
                <Sidebar />
            </aside>

            {/* Feed */}
            <main className="col-span-7 border-r border-gray-200">
                <Feed />
            </main>

            {/* Trends */}
            <section className="col-span-3 hidden lg:block">
                <Trends />
            </section>
        </div>
    );
}