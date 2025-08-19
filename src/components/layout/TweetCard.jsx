import { useState } from "react";
import { useRelativeTime } from "../../hooks/useRelativeTime";

export default function TweetCard({ tweet }) {
    const [likes, setLikes] = useState(0);
    const timeString = useRelativeTime(tweet.date);

    return (
        <div className="flex flex-col sm:flex-row gap-3 p-4 border rounded-lg bg-white hover:bg-gray-50 transition">
            <img src={tweet.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold">{tweet.user}</p>
                    <span className="text-gray-500 text-sm">@{tweet.user.toLowerCase()}</span>
                    <span className="text-gray-400 text-sm">· {timeString}</span>
                </div>
                <p className="mt-2">{tweet.content}</p>
                <div className="flex gap-6 mt-3 text-gray-500 text-sm">
                    <button
                        onClick={() => setLikes(likes + 1)}
                        className="flex items-center gap-1 hover:text-red-500 transition"
                    >
                        ❤️ {likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition">
                        💬 0
                    </button>
                </div>
            </div>
        </div>
    );
}