import Card from "./Card";
import "./listing.css";

function Listing() {
  return (
    <section id="listings" className="container listing-section">
      <div className="card-container | mt-6 p-6 grid sm:grid-cols-2 grid-cols-1 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Listing;
