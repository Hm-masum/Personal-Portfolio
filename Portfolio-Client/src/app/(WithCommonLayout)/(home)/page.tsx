import CertificationCard from "@/components/module/Certification/CertificationCard";
import ContactComp from "@/components/module/Contact/ContactComp";
import About from "@/components/module/Home/About";
import Banner from "@/components/module/Home/Banner";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <CertificationCard />
      <ContactComp />
    </div>
  );
};

export default HomePage;
