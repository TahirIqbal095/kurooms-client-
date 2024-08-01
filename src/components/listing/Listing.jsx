import { useState, useEffect } from "react";

import Card from "./Card";
import "./listing.css";

function Listing() {
  const [cardData, setCardData] = useState([]);
  const [allProperties, setAllProperties] = useState(false);

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

  useEffect(() => {
    async function fetchCardData() {
      try {
        const response = fetch("http://localhost/8000/listing");
        if (!response.ok) {
          throw new Error("Response was not ok.");
        }

        const data = (await response).json();
        setCardData(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }

    fetchCardData();
  }, []);

  const handleClick = () => {
    setAllProperties(true);
  };

  const cardList = cardData.map((data) => <Card value={data} />);
  const allCardList = cardData.map((data) => <Card value={data} />);

  return (
    <section
      id="listings"
      className="card-container | container listing-section"
    >
      <div>
        <h2 className="underline-text | my-4">Available Rooms</h2>
      </div>

      <div className=" mt-6 p-6 grid sm:grid-cols-2 grid-cols-1 gap-4">
        {allProperties ? allCardList : cardList}
      </div>
      <div className="text-center my-6">
        <button
          onClick={handleClick}
          className="btn-big btn-orange | hover:scale-105 transition hover:shado"
        >
          View more
        </button>
      </div>
    </section>
  );
}

export default Listing;
