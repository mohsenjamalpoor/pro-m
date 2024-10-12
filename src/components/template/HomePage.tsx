import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "@/components/module/CategoryCard";
import { categories, cities, services } from "@/constants/strings";


function HomePage() {
  return (
    <div>
      <div className="flex justify-center items-center rounded-[10px] p-5 my-25 mx-0 max-[1000px]:flex-col-reverse">
        <div className="w-full text-center text-[#304ffe]">
          <h1 className="mb-7 text-5xl font-bold max-[600px]:text-4xl">سامانه خرید و اجاره ملک</h1>
          <ul className="flex list-none justify-center flex-wrap">
            {services.map((i:string) => (
              <li className="flex items-center w-20 m-2.5 bg-[#bbdefb] rounded-[5px] py-1.5 px-2.5" key={i}>
                <FiCircle />
                <span className="font-normal mr-1.5 h-5">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mx-0 my-12 max-[600px]:justify-center">
        {Object.keys(categories).map((i) => (
          <CategoryCard title={categories[i]} name={i} />
        ))}
      </div>
      <div className="mx-0 my-25">
        <h3 className="font-semibold text-3xl text-center text-[#304ffe]">شهر های پر بازدید</h3>
        <ul className="flex justify-between flex-wrap mt-12 list-none max-[600px]:justify-center">   {cities.map((i) => (
            <li className="flex justify-center items-center w-55 my-2.5 mx-0 text-lg bg-[#bbdefb]  text-[#304ffe] rounded-[10px] p-2" key={i}>
              <FaCity />
              <span className="font-normal mr-4 h-8">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
