"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createProject = async (data: Record<string, unknown>) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    revalidateTag("Project");

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllProject = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      next: {
        tags: ["Project"],
      },
    });
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleProject = async (projectId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
      {
        next: {
          tags: ["Project"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateProject = async (
  projectData: Record<string, unknown>,
  projectId: string
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      }
    );
    revalidateTag("Project");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteProject = async (projectId: string): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag("Project");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
