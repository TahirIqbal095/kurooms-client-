import { useState, useEffect } from "react";

import Card from "./Card";
import "./listing.css";

function Listing() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  const cardList = cardData.map((data) => {
    <Card value={data} />;
  });

  return (
    <section id="listings" className="container listing-section">
      <div className="card-container | mt-6 p-6 grid sm:grid-cols-2 grid-cols-1 gap-4">
        {cardList}
      </div>
    </section>
  );
}

export default Listing;
