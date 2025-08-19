
export default function Sidebar() {
    const menuItems = [
        { name: "Home", icon: "🏠" },
        { name: "Explore", icon: "🔍" },
        { name: "Notifications", icon: "🔔" },
        { name: "Messages", icon: "✉️" },
        { name: "Profile", icon: "👤" },
    ];

    return (
        <div className="p-4 flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-blue-500">🐦 Twitter</h1>

            <nav className="flex flex-col gap-3 mt-6">
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        className="flex items-center gap-3 text-lg p-2 rounded-full hover:bg-blue-100 transition"
                    >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>

            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600">
                Tweet
            </button>
        </div>
    );
}
