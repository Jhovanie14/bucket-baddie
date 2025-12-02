import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Menu from "./components/Menu";
import WhyUs from "./components/WhyUs";
import Locations from "./components/Locations";
import SocialGallery from "./components/SocialGallery";
import OrderForm from "./components/OrderForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Menu />
      <WhyUs />
      <Locations />
      <SocialGallery />
      <OrderForm />
      <FAQ />
      <Footer />
    </>
  );
}
