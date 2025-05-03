import UpdateEducationForm from "@/components/module/Education/UpdateEducationForm";
import { getSingleEducation } from "@/services/Education";

const UpdateEducationPage = async ({
  params,
}: {
  params: Promise<{ educationId: string }>;
}) => {
  const { educationId } = await params;
  const { data: educationData } = await getSingleEducation(educationId);

  return (
    <div className="flex items-center justify-center">
      <UpdateEducationForm educationData={educationData} />
    </div>
  );
};

export default UpdateEducationPage;
