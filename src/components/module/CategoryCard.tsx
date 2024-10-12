import Link from "next/link";
import Image from "next/image";


function CategoryCard({ name, title }:any) {
  return (
    <div className="shadow-[#304ffe4a] shadow-[0_4px_15px] rounded-[15px] mx-0 my-2.5 p-2.5 overflow-hidden transition-all ease-in duration-100 hover:rotate-[-5deg]">
      <Link href={`/buy-residential?category=${name}`}>
        <Image className="rounded-[10px]"
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
        <p className="text-xl font-normal text-[#304ffe] text-center my-2.5 mx-0">{title}</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
