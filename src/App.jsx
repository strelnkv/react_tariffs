import React, { useState } from "react";
import "./App.css";
import data from "./tariffs.json";
import Tariff from "./Tariff";

function App() {
  const [selectedTariffId, setSelectedTariffId] = useState(null);

  return (
    <div className="App">
      {data.tariffs.map((tariff) => (
        <Tariff
          key={tariff.id}
          id={tariff.id}
          tariff={tariff.tariff}
          price={tariff.price}
          speed={tariff.speed}
          comment={tariff.comment}
          color_header={tariff.color_header}
          color_main={tariff.color_main}
          isHighlighted={tariff.id === selectedTariffId}
          onClick={setSelectedTariffId}
        />
      ))}
    </div>
  );
}

export default App;
