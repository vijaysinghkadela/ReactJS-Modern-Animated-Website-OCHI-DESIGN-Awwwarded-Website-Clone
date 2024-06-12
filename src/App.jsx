import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navber from "./components/Navber";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navber />
      <LandingPage />
      <Marquee />
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
