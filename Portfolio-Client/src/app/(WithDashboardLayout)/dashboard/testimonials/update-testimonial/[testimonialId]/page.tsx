import UpdateTestimonialForm from "@/components/module/Testimonial/UpdateTestimonialForm";
import { getSingleTestimonial } from "@/services/Testimonial";

const UpdateTestimonialPage = async ({
  params,
}: {
  params: Promise<{ testimonialId: string }>;
}) => {
  const { testimonialId } = await params;
  const { data: testimonialData } = await getSingleTestimonial(testimonialId);

  return (
    <div className="flex items-center justify-center">
      <UpdateTestimonialForm testimonialData={testimonialData} />
    </div>
  );
};

export default UpdateTestimonialPage;
