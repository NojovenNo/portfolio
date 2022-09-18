import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/Navbar";
import Banner from "./componentes/Banner";
import AdaptMobile from "./componentes/AdaptMobile";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AdaptMobile />
    </div>
  );
}

export default App;
