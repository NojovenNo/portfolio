import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import MobNavbar from "./mobile/MobNavbar";
import MobBanner from "./mobile/MobBanner";
import MobAboutMe from "./mobile/MobAboutMe";
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
      {!matches && <MobNavbar />}
      {!matches && <MobBanner />}
      {!matches && <MobAboutMe />}
    </div>
  );
};

export default App;
