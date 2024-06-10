import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navber from "./components/Navber";

function App() {
  return <div className="w-full h-screen bg-zinc-900 text-white">
    <Navber/>
    <LandingPage/>
    <Marquee/>
  </div>;
}

export default App;
