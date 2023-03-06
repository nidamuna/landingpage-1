import Navbar from "./component/Navbar";
import Herosection from "./component/Herosection";
import Pelatihansection from "./component/Pelatihansection";
import Testimoni from "./component/Testimoni";
import Fasilitas from "./component/Fasilitas";
import Contactsection from "./component/Contactsection";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar/>
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
