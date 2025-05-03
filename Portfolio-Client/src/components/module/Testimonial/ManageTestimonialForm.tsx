"use client";

import { Button } from "@/components/ui/button";
import DeleteConfirmationModal from "@/components/ui/core/PModal";
import { PTable } from "@/components/ui/core/PTable";
import { deleteTestimonial } from "@/services/Testimonial";
import { ITestimonial } from "@/type/testimonial";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const ManageTestimonial = ({
  testimonials,
}: {
  testimonials: ITestimonial[];
}) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: ITestimonial) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteTestimonial(selectedId);
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

  const columns: ColumnDef<ITestimonial>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <span>{row.original.name}</span>,
    },
    {
      accessorKey: "Designation",
      header: "designation",
      cell: ({ row }) => <span>{row.original.designation}</span>,
    },
    {
      accessorKey: "ratings",
      header: "Ratings",
      cell: ({ row }) => <span>{row.original.ratings}</span>,
    },
    {
      accessorKey: "action",
      header: "Update",
      cell: ({ row }) => (
        <Button
          onClick={() =>
            router.push(
              `/dashboard/testimonials/update-testimonial/${row.original._id}`
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
      <PTable columns={columns} data={testimonials || []} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageTestimonial;
