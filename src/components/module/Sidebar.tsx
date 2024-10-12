import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";


function Sidebar() {
  return (
    <div className="flex flex-col">
      <p className="flex text-lg font-normal">
        <HiFilter className="ml-1.5 text-xl text-[#304ffe]" />
        دسته بندی
      </p>
      <Link className="m-1.5 text-gray-500" href="/buy-residential">همه</Link>
      {Object.keys(categories).map((i) => (
        <Link className="m-1.5 text-gray-500"
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
