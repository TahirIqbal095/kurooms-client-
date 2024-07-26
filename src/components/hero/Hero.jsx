import { assets } from "../../assets/assets";

import "./hero.css";

function Hero() {
  return (
    <section className="container hero-section">
      <div className="hero-heading">
        <h1>Find Rooms Quick and Easy</h1>
        <p className="w-[35ch] mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          officia, incidunt maiores quos Id, provident ea!
        </p>
        <button className="btn | mt-6">View Rooms</button>
      </div>

      <div className="hero-img">
        <img src={assets.hero_img} alt="" />
      </div>
    </section>
  );
}

export default Hero;
