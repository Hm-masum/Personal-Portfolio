"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createTestimonial = async (data: Record<string, unknown>) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/testimonial`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    revalidateTag("Testimonial");

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllTestimonials = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/testimonial`, {
      next: {
        tags: ["Testimonial"],
      },
    });
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleTestimonial = async (testimonialId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/testimonial/${testimonialId}`,
      {
        next: {
          tags: ["Testimonial"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateTestimonial = async (
  testimonialData: Record<string, unknown>,
  testimonialId: string
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/testimonial/${testimonialId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testimonialData),
      }
    );
    revalidateTag("Testimonial");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteTestimonial = async (
  testimonialId: string
): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/testimonial/${testimonialId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag("Testimonial");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
