import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Statistic from "../components/Statistic";

const Home = () => {
  return (
    <main className="font-title text-[#34313D]">
      <Navbar />
      <Hero />
      <Input />
      <Statistic />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
