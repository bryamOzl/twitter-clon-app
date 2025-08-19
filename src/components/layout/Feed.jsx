import { useState } from "react";
import TweetForm from "./TweetForm";
import TweetCard from "./TweetCard";

export default function Feed() {
    // Estado para guardar los tweets
    const [tweets, setTweets] = useState([
        {
            id: 1, user: "Gabriel",
            content: "Aprendiendo React con un clon de Twitter 🚀",
            avatar: "https://i.pravatar.cc/150?img=12",
            date: new Date(new Date().getTime() - 2 * 3600 * 1000), // 2 horas atrás
        },
        {
            id: 2, user: "Mora",
            content: "Ayudando con buen código 😎",
            avatar: "https://i.pravatar.cc/150?img=5",
            date: new Date(new Date().getTime() - 5 * 3600 * 1000), // 5 horas atrás
        },
    ]);

    // Función para añadir un tweet nuevo
    const addTweet = (content) => {
        const newTweet = {
            id: Date.now(), // un id único
            user: "Gabriel", // de momento hardcodeado
            content,
            avatar: "https://i.pravatar.cc/150?img=12",
            date: new Date(), // 👈 fecha exacta
        };

        // Creamos una nueva lista con el tweet agregado al inicio
        setTweets([newTweet, ...tweets]);
    };

    return (
        <div>
            {/* Formulario */}
            <TweetForm onAddTweet={addTweet} />

            {/* Lista de tweets */}
            <div className="p-4 space-y-4">
                {tweets.map((tweet) => (
                    <TweetCard key={tweet.id} tweet={tweet} />
                ))}
            </div>
        </div>
    );
}