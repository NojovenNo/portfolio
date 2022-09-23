import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/Navbar";
import Banner from "./componentes/Banner";
import AboutMe from "./componentes/AboutMe";
// import AdaptMobile from "./componentes/AdaptMobile";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
      {/* <AdaptMobile /> */}
    </div>
  );
}

export default App;
