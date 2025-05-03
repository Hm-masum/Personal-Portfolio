import ManageCertification from "@/components/module/Certification/ManageCertification";
import { getAllCertification } from "@/services/Certification";

const ManageCertificationPage = async () => {
  const { data: certificationData } = await getAllCertification();
  return (
    <div>
      <ManageCertification certifications={certificationData} />
    </div>
  );
};

export default ManageCertificationPage;
