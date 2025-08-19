import { useState } from "react";

export default function TweetForm({ onAddTweet }) {
    const [content, setContent] = useState(""); // estado local para el input

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return; // evitar tweets vacíos

        // Enviar el tweet hacia el padre (Feed.jsx)
        onAddTweet(content);

        // Limpiar el input después de enviar
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border-b border-gray-200">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="¿Qué está pasando?"
                className="w-full p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="3"
            />
            <div className="flex justify-end mt-2">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600"
                >
                    Tweet
                </button>
            </div>
        </form>
    );
}