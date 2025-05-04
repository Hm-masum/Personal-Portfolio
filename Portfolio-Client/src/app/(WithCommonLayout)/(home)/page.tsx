import ContactComp from "@/components/module/Contact/ContactComp";
import About from "@/components/module/Home/About";
import Banner from "@/components/module/Home/Banner";
import BestProjects from "@/components/module/Home/BestProjects";
import CertificationCard from "@/components/module/Home/CertificationCard";
import Education from "@/components/module/Home/Education";
import SkillCard from "@/components/module/Home/SkillCard";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Education />
      <SkillCard />
      <CertificationCard />
      <BestProjects />
      <ContactComp />
    </div>
  );
};

export default HomePage;
