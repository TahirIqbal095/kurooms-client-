import { assets } from "../../assets/assets";

import "./hero.css";

function Hero() {
  return (
    <section className="container hero-section">
      <div className="hero-heading | mx-auto">
        <h1>
          Find Rooms <span className="underline-text">Quick</span> and{" "}
          <span className="underline-text">Easy</span>
        </h1>
        <p className="max-w-[42ch] text-xl mt-6">
          The ultimate solution for students seeking the perfect place to live.
          Our platform features a diverse range of hostels and homes for rent
        </p>
        <button className="btn-big btn-green | mt-8 hover:scale-105 transition hover:shadow">
          View Rooms
        </button>
      </div>
    </section>
  );
}

export default Hero;
