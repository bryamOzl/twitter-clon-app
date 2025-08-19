
export default function Trends() {
    const trends = [
        { topic: "#ReactJS", tweets: "120K Tweets" },
        { topic: "#TailwindCSS", tweets: "80K Tweets" },
        { topic: "#Vite", tweets: "50K Tweets" },
    ];

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Trends for you</h2>
            <div className="space-y-3">
                {trends.map((trend) => (
                    <div key={trend.topic} className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <p className="font-semibold">{trend.topic}</p>
                        <p className="text-sm text-gray-500">{trend.tweets}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
