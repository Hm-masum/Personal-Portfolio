"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createEducation = async (data: Record<string, unknown>) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/educations`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    revalidateTag("Education");

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllEducation = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/educations`, {
      next: {
        tags: ["Education"],
      },
    });
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleEducation = async (educationId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/educations/${educationId}`,
      {
        next: {
          tags: ["Education"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateEducation = async (
  educationData: Record<string, unknown>,
  educationId: string
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/educations/${educationId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(educationData),
      }
    );
    revalidateTag("Education");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteEducation = async (educationId: string): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/educations/${educationId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag("Education");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
