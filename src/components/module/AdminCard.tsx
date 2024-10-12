"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { sp } from "@/utils/replaceNumber";
interface Props {data:{
  _id:string,
  title:string,
  location:string,
  description:string,
  price:string,
}}

function AdminCard({ data: { _id, title, description, location, price } }:Props) {
  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className="pb-2.5 mb-20 border-b-2 border-solid border-[#304ffe]">
      <h3 className="mb-5 text-[#304ffe] font-normal text-xl">{title}</h3>
      <p className="text-justify mb-5">{description}</p>
      <div className="flex mb-5">
        <span className="bg-[#304ffe58] text-[#304ffe] ml-3.5 py-1.5 px-2.5 rounded-[5px]">{location}</span>
        <span className="bg-[#304ffe58] text-[#304ffe] ml-3.5 py-1.5 px-2.5 rounded-[5px]">{sp(price)}</span>
      </div>
      <button className="bg-[#00a800] border-none font-normal py-1 px-4 text-base mt-5 text-white rounded-[5px] cursor-pointer transition-all ease-in delay-100 hover:text-[#000]" onClick={publishHandler}>انتشار</button>
      <Toaster />
    </div>
  );
}

export default AdminCard;
