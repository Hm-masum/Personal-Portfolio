"use client";

import * as React from "react";
import {
  Badge,
  Book,
  Bot,
  GraduationCap,
  LetterText,
  Map,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Blogs",
      url: "#",
      icon: LetterText,
      items: [
        {
          title: "Manage Blogs",
          url: "/dashboard/blogs/manage-blogs",
        },
        {
          title: "Create Blog",
          url: "/dashboard/blogs/create-blog",
        },
      ],
    },
    {
      title: "Certifications",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Manage Certifications",
          url: "/dashboard/certifications/manage-certifications",
        },
        {
          title: "Create Certification",
          url: "/dashboard/certifications/create-certification",
        },
      ],
    },
    {
      title: "Educations",
      url: "#",
      icon: Book,
      items: [
        {
          title: "Manage Educations",
          url: "/dashboard/educations/manage-educations",
        },
        {
          title: "Create Education",
          url: "/dashboard/educations/create-education",
        },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: Map,
      items: [
        {
          title: "Manage Projects",
          url: "/dashboard/projects/manage-projects",
        },
        {
          title: "Create Project",
          url: "/dashboard/projects/create-project",
        },
      ],
    },
    {
      title: "Skills",
      url: "#",
      icon: Badge,
      items: [
        {
          title: "Manage Skills",
          url: "/dashboard/skills/manage-skills",
        },
        {
          title: "Create Skill",
          url: "/dashboard/skills/create-skill",
        },
      ],
    },
    {
      title: "Testimonials",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Manage Testimonials",
          url: "/dashboard/testimonials/manage-testimonials",
        },
        {
          title: "Create Testimonial",
          url: "/dashboard/testimonials/create-testimonial",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-center text-xl">HM Masum</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
