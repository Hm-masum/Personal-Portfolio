import UpdateCertificationForm from "@/components/module/Certification/UpdateCertification";
import { getSingleCertification } from "@/services/Certification";

const UpdateCertificationPage = async ({
  params,
}: {
  params: Promise<{ certificationId: string }>;
}) => {
  const { certificationId } = await params;
  const { data: certificationData } = await getSingleCertification(
    certificationId
  );

  return (
    <div className="flex items-center justify-center">
      <UpdateCertificationForm certificationData={certificationData} />
    </div>
  );
};

export default UpdateCertificationPage;
