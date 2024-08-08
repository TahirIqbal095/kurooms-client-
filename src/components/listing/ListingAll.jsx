import { useState, useEffect } from "react";
import Card from "./Card";
import "./listing.css";

function ListingAll() {
  const [cardData, setCardData] = useState([]);
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
  }, []);

  const cardList = cardData.map((data) => <Card value={data} />);

  return (
    <section
      id="listings"
      className="card-container listing-section | container mt-20"
    >
      <div>
        <h2 className="underline-text | my-4">Available Rooms</h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
        {cardList}
      </div>
    </section>
  );
}

export default ListingAll;
