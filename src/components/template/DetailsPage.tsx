import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replaceNumber";
import ItemList from "@/components/module/ItemList";
import Title from "@/components/module/Title";
import ShareButton from "@/components/module/ShareButton";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";

interface Props {data:{
  title:string,
  location:string,
  description:string,
  amenities:string,
  rules:string,
  realState:string,
  phone:string,
  price:string,
  category:string,
  constructionDate:string,
}}
function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}:Props) {
  return (
    <div className="flex mt-16">
      <div className="w-full">
        <h1 className="text-[#304ffe] font-normal mb-2.5 text-xl">{title}</h1>
        <span className="flex items-start text-[#6b7280] h-4 mb-12">
          <HiOutlineLocationMarker className="ml-1.5 text-xl" />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p className="text-justify mb-12">{description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className="mr-10 w-64">
        <div className="flex flex-col items-center p-2.5 rounded-[10px] mb-5 shadow-[#304ffe4a] shadow-[0_4px_15px]">
          <SiHomebridge className="text-[#304ffe] text-5xl mx-0 mt-2.5 mb-5" />
          <p className="font-normal text-lg">املاک {realState}</p>
          <span className="flex items-center mt-5 text-[#6b7280]">
            <AiOutlinePhone className="text-[#6b7280] m-0 ml-1.5 text-2xl" />
            {e2p(phone)}
          </span>
        </div>
         <div className="flex justify-center items-center p-2.5 rounded-[10px] mb-8 cursor-pointer shadow-[#304ffe4a] shadow-[0_4px_15px] py-5 px-0"><ShareButton/></div> 
        <div className="flex flex-col items-center p-2.5 rounded-[10px] mb-5 shadow-[#304ffe4a] shadow-[0_4px_15px] pt-5 px-0 pb-0">
          <p className="flex items-center text-[#6b7280] mb-5 h-5">
            {icons[category]}
            {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck className="ml-1.5 text-[#304ffe] text-2xl"/>
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
