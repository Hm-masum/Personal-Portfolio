"use client";

import { Button } from "@/components/ui/button";
import DeleteConfirmationModal from "@/components/ui/core/PModal";
import { PTable } from "@/components/ui/core/PTable";
import { deleteCertification } from "@/services/Certification";
import { ICertification } from "@/type/certification";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const ManageCertification = ({
  certifications,
}: {
  certifications: ICertification[];
}) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: ICertification) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.title);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteCertification(selectedId);
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

  const columns: ColumnDef<ICertification>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => <span>{row.original.title}</span>,
    },
    {
      accessorKey: "action",
      header: "Update",
      cell: ({ row }) => (
        <Button
          onClick={() =>
            router.push(
              `/dashboard/certifications/update-certification/${row.original._id}`
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
      <PTable columns={columns} data={certifications || []} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageCertification;
