import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./componentes/Projects";
import AdaptMobile from "./componentes/AdaptMobile";
function App() {
  return (
    <div>
      <AdaptMobile />
      <Projects />
    </div>
  );
}

export default App;
