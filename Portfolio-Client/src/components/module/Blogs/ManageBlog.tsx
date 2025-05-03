"use client";

import { Button } from "@/components/ui/button";
import DeleteConfirmationModal from "@/components/ui/core/PModal";
import { PTable } from "@/components/ui/core/PTable";
import { deleteBlog } from "@/services/Blog";
import { IBlog } from "@/type/blog";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const ManageBlog = ({ blogs }: { blogs: IBlog[] }) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IBlog) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.title);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteBlog(selectedId);
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

  const columns: ColumnDef<IBlog>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => <span>{row.original.title}</span>,
    },
    {
      accessorKey: "author",
      header: "Author",
      cell: ({ row }) => <span>{row.original.authorName}</span>,
    },
    {
      accessorKey: "action",
      header: "Details",
      cell: ({ row }) => (
        <Button onClick={() => router.push(`/blogs/${row.original._id}`)}>
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
            router.push(`/dashboard/blogs/update-blog/${row.original._id}`)
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
      <PTable columns={columns} data={blogs || []} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageBlog;
