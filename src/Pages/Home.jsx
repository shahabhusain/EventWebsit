import Book from "../components/Book";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Over from "../components/Over";
import Packages from "../components/Packages";
import Services from "../components/Services";
import Hero1 from '../components/Hero1'
const Home = () => {
  return (
    <div>
      <div className="back md:h-[777px] h-[655px]">
        <Header />
        {/* <Hero1 /> */}
        <Hero />
      </div>
      <Services />
      <Over />
      <Packages />
      <Book />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
