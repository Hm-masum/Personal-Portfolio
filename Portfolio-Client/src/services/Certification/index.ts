"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createCertification = async (data: Record<string, unknown>) => {
  const token = await getValidToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/certifications`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("Certification");

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllCertification = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/certifications`,
      {
        next: {
          tags: ["Certification"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleCertification = async (certificationId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/certifications/${certificationId}`,
      {
        next: {
          tags: ["Certification"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateCertification = async (
  certificateData: Record<string, unknown>,
  certificateId: string
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/certifications/${certificateId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(certificateData),
      }
    );
    revalidateTag("Certification");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteCertification = async (
  certificateId: string
): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/certifications/${certificateId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag("Certification");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
