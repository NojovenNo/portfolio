import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
const App = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div>
      {matches && <Navbar />}
      {matches && <Banner />}
      {matches && <AboutMe />}
      {!matches && <h3>Small Screen</h3>}
    </div>
  );
};

export default App;
