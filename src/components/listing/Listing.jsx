import { useState, useEffect } from "react";

import Card from "./Card";
import "./listing.css";

import { Link } from "react-router-dom";

function Listing() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchCardData() {
      try {
        const response = await fetch("http://localhost:8000/");
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
    <section
      id="listings"
      className="card-container | listing-section container"
    >
      <div>
        <h2 className="underline-text | my-4">Available Rooms</h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
        {cardList}
      </div>
      <div className="my-6 text-center">
        <Link
          to="listing-all"
          className="btn-big btn-orange | hover:shado transition hover:scale-105"
        >
          View more
        </Link>
      </div>
    </section>
  );
}

export default Listing;
