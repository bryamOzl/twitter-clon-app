import { useState } from "react";

export default function TweetForm({ onAddTweet }) {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return;
        onAddTweet(content);
        setContent("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col gap-3"
        >
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="¿Qué está pasando?"
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
            />

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!content.trim()}
                >
                    Tweet
                </button>
            </div>
        </form>
    );
}