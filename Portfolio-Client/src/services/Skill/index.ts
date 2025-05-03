"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createSkill = async (data: Record<string, unknown>) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    revalidateTag("Skill");

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
      next: {
        tags: ["Skill"],
      },
    });
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleSkill = async (skillId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills/${skillId}`,
      {
        next: {
          tags: ["Skill"],
        },
      }
    );
    const result = res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateSkill = async (
  skillData: Record<string, unknown>,
  skillId: string
) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills/${skillId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(skillData),
      }
    );
    revalidateTag("Skill");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteSkill = async (skillId: string): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/experiences/${skillId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag("Skill");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
