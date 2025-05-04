/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import DeleteConfirmationModal from "@/components/ui/core/PModal";
import { PTable } from "@/components/ui/core/PTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { deleteProject, updateProject } from "@/services/Project";
import { IProject } from "@/type/project";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const ManageProjects = ({ projects }: { projects: IProject[] }) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IProject) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.title);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteProject(selectedId);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  const handleShowHome = async (id: string, value: string) => {
    try {
      const payload = {
        showHome: value,
      };
      const res = await updateProject(payload, id);

      console.log(res);
      if (res?.success) {
        toast.success("Project updated successfully!");
      } else {
        toast.error("Something is wrong!");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  const columns: ColumnDef<IProject>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => <span>{row.original.title}</span>,
    },
    {
      accessorKey: "liveLink",
      header: "LiveLink",
      cell: ({ row }) => <span>{row.original.liveLink}</span>,
    },
    {
      accessorKey: "showHome",
      header: "ShowHome",
      cell: ({ row }) => {
        const status = row?.original?.showHome;
        return (
          <p>
            <Select
              value={status}
              onValueChange={(value) => handleShowHome(row.original._id, value)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Show Home" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </p>
        );
      },
    },
    {
      accessorKey: "action",
      header: "Details",
      cell: ({ row }) => (
        <Button onClick={() => router.push(`/projects/${row.original._id}`)}>
          Details
        </Button>
      ),
    },
    {
      accessorKey: "action1",
      header: "Update",
      cell: ({ row }) => (
        <Button
          onClick={() =>
            router.push(
              `/dashboard/projects/update-project/${row.original._id}`
            )
          }
        >
          <Edit className="w-5 h-5" />
        </Button>
      ),
    },
    {
      accessorKey: "action2",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <PTable columns={columns} data={projects || []} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageProjects;
