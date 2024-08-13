import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Featured from "./components/Featured";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Featured />
      <About />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
