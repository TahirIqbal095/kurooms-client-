import Signup from "./components/register/Signup";
import Signin from "./components/register/Signin";
import SharedLayout from "./components/SharedLayout";
import Home from "./components/Home";
import About from "./components/about/About";
import ListingAll from "./components/listing/ListingAll";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="sign-in" element={<Signin />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="about-us" element={<About />} />
            <Route path="listing-all" element={<ListingAll />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
