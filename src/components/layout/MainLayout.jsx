import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Trends from "./Trends";

export default function MainLayout() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar */}
            <aside className="hidden md:block md:w-64 border-r p-4"><Sidebar /></aside>

            {/* Feed */}
            <main className="flex-1 p-4"><Feed /></main>

            {/* Trends */}
            <section className="hidden lg:block lg:w-64 border-l p-4"><Trends /></section>
        </div>
    );
}