import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Main() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
