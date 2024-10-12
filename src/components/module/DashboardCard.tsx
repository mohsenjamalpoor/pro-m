"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Card from "@/components/module/Card";


function DashboardCard({ data }:any) {
  const router = useRouter();

  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className="rounded-[15px] flex mb-5 border border-solid border-[#304ffe58]">
      <Card data={data} />
      <div className="flex justify-between items-end p-2.5 w-full">
        <button className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-[8px] text-base border border-solid border-[#00a800] text-[#00a800] last-of-type:text-[#db0505]" onClick={editHandler}>
          ویرایش
          <FiEdit className="mr-2.5 text-lg" />
        </button>
        <button className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-[8px] text-base border border-solid border-[#00a800] text-[#00a800] last-of-type:text-[#db0505]" onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete className="mr-2.5 text-lg" />
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;
