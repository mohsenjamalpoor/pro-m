import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/replaceNumber";
import { icons } from "@/constants/icons";
interface Props {data:{
  _id:string,
  title:string,
  location:string,
  price:string,
  category:string,
  
}}

function Card({ data: { _id, category, title, location, price } }:Props) {
  return (
    <div className="w-64 border-2 border-solid border-[#304ffe58] m-2.5 p-2.5 rounded-[10px]">
      <div className="bg-[#304ffe58] text-[#304ffe] p-1 rounded-[5px] text-3xl">{icons[category]}</div>
      <p className="font-normal my-2.5 mx-0">{title}</p>
      <p className="flex text-sm text-gray-500">
        <HiOutlineLocationMarker className="ml-1 text-base" />
        {location}
      </p>
      <span className="text-gray-500 block text-sm mt-2.5 font-normal">{sp(price)} تومان</span>
      <Link className="flex justify-between items-center mt-5 font-normal text-[#304ffe] text-sm" href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt className="text-2xl " />
      </Link>
    </div>
  );
}

export default Card;
