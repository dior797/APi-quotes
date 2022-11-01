import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
    const [quotes, setQuotes] = useState("");

    useEffect(() => {
        const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const ran = Math.floor(Math.random()*json.quotes.length)
                setQuotes(json.quotes[ran].quote);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className= "text">
            {quotes}
            <br></br>
            <a href="/">
            <button>Reset</button>
            </a>
        </div>
    );
};

export default App;
