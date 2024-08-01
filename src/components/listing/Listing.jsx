import { useState, useEffect } from "react";

import Card from "./Card";
import "./listing.css";

function Listing() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchCardData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        if (!response.ok) {
          throw new Error("Response was not ok");
        }

        const result = await response.json();
        setCardData(result);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }

    fetchCardData();
  }, []);

  const cardList = cardData.map((data) => <Card value={data} />);

  return (
    <section id="listings" className="container listing-section">
      <div className="card-container | mt-6 p-6 grid sm:grid-cols-2 grid-cols-1 gap-4">
        {cardList}
      </div>
    </section>
  );
}

export default Listing;
