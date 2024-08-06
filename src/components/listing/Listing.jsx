import { useState, useEffect } from "react";

import Card from "./Card";
import "./listing.css";

function Listing() {
  const [cardData, setCardData] = useState([]);
  const [allProperties, setAllProperties] = useState(false);

  document.onrelo;

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

  useEffect(() => {
    async function fetchCardData() {
      try {
        const response = await fetch("http://localhost:8000/listings/index/");
        if (!response.ok) {
          throw new Error("Response was not ok.");
        }

        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }

    fetchCardData();
  }, [allProperties]);

  const handleClick = () => {
    setAllProperties((prev) => !prev);
  };

  const cardList = cardData.map((data) => <Card value={data} />);
  const allCardList = cardData.map((data) => <Card value={data} />);

  return (
    <section
      id="listings"
      className="card-container | listing-section container"
      onLoad={handleClick}
    >
      <div>
        <h2 className="underline-text | my-4">Available Rooms</h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
        {allProperties ? allCardList : cardList}
      </div>
      <div className="my-6 text-center">
        <button
          onClick={handleClick}
          className="btn-big btn-orange | hover:shado transition hover:scale-105"
        >
          View more
        </button>
      </div>
    </section>
  );
}

export default Listing;
