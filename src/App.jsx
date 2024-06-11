import About from "./components/About";
import Eyes from "./components/Eyes";
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
    </div>
  );
}

export default App;
