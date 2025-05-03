import { getAllCertification } from "@/services/Certification";
import CarouselCard from "./CarouselCard";

const CertificationCard = async () => {
  const { data: certificationData } = await getAllCertification();
  return (
    <div className="my-12 space-y-6">
      <h2 className="text-2xl md:text-4xl text-yellow-500 font-semibold text-center">
        Showcase
      </h2>
      <CarouselCard certificationData={certificationData} />
    </div>
  );
};

export default CertificationCard;
