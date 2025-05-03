"use client";

import { Button } from "@/components/ui/button";
import DeleteConfirmationModal from "@/components/ui/core/PModal";
import { PTable } from "@/components/ui/core/PTable";
import { deleteEducation } from "@/services/Education";
import { IEducation } from "@/type/education";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const ManageEducation = ({ educations }: { educations: IEducation[] }) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IEducation) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.degree);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteEducation(selectedId);
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

  const columns: ColumnDef<IEducation>[] = [
    {
      accessorKey: "degree",
      header: "Degree",
      cell: ({ row }) => <span>{row.original.degree}</span>,
    },
    {
      accessorKey: "institution",
      header: "Institution",
      cell: ({ row }) => <span>{row.original.institution}</span>,
    },
    {
      accessorKey: "educationYear",
      header: "EducationYear",
      cell: ({ row }) => <span>{row.original.educationYear}</span>,
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => <span>{row.original.location}</span>,
    },
    {
      accessorKey: "action",
      header: "Update",
      cell: ({ row }) => (
        <Button
          onClick={() =>
            router.push(
              `/dashboard/educations/update-education/${row.original._id}`
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
      <PTable columns={columns} data={educations || []} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageEducation;
