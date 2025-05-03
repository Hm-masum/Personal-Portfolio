import ManageTestimonial from "@/components/module/Testimonial/ManageTestimonialForm";
import { getAllTestimonials } from "@/services/Testimonial";

const ManageTestimonialPage = async () => {
  const { data: testimonialsData } = await getAllTestimonials();
  return (
    <div>
      <ManageTestimonial testimonials={testimonialsData} />
    </div>
  );
};

export default ManageTestimonialPage;
