import Navbar from "./component/Navbar";
import Navbar2 from "./component/Navbar2";
import Herosection from "./component/Herosection";
import Pelatihansection from "./component/Pelatihansection";
import Testimoni from "./component/Testimoni";
import Fasilitas from "./component/Fasilitas";
import Contactsection from "./component/Contactsection";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

function App() {
  const scrollDirection = useScrollDirection();
  return (
    <div>
      <Navbar/>
      <div className={`sticky top-0 z-30 ${ scrollDirection === "down" ? "hidden" : "flex"}`}>
        <Navbar2/>
      </div>
      <Herosection/>
      <Pelatihansection/>
      <Testimoni/>
      <Fasilitas/>
      <Contactsection/>
      <Footer/>
    </div>
  );
}

export default App;
