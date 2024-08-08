import { assets } from "../../assets/assets";

import "./hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section container">
      <div className="hero-heading | mx-auto">
        <h1>
          Find Rooms <span className="underline-text">Quick</span> and{" "}
          <span className="underline-text">Easy</span>
        </h1>
        <p className="mb-8 mt-6 max-w-[42ch] text-xl">
          The ultimate solution for students seeking the perfect place to live.
          Our platform features a diverse range of hostels and homes for rent
        </p>
        <a
          href="#listings"
          className="btn-big btn-green | transition hover:scale-105 hover:shadow"
        >
          View Rooms
        </a>
      </div>
    </section>
  );
}

export default Hero;
