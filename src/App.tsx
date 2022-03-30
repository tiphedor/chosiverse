import React, { useEffect, useState } from "react";
import "./app.css";
import { getAllChoses } from "./firebase/collections";
import { Chose } from "./firebase/collections.type";
import ChoseCard from "./components/choseCard";

function App() {
  const [choses, setChoses] = useState<Chose[]>([]);

  useEffect(() => {
    (async () => {
      const choses = await getAllChoses();
      setChoses(choses);
    })();
  }, []);

  return (
    <div className="App">
      {choses.map((chose) => (
        <div key={chose.id}>
          <ChoseCard {...chose} />
        </div>
      ))}
    </div>
  );
}

export default App;
