import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "@/components/module/LogoutButton";


async function DashboardSidebar({ children, email, role }:any) {
  return (
    <div className="mt-20 flex justify-between">
      <div className=" flex flex-col rounded-[10px] w-56 h-fit py-7 px-4 ml-10 shadow-[#304ffe4a] shadow-[0_4px_15px] items-center">
        <CgProfile className="text-[#304ffe] text-5xl" />
        {role === "ADMIN" ? "ادمین" : null}
        <p className="text-[1.1rem] font-normal mt-5 text-[#58585a]">{email}</p>
        <span className="bg-[#304ffe] w-full h-px mb-7"></span>
        <Link className="mx-0 my-1 w-full font-normal" href="/dashboard">حساب کاربری</Link>
        <Link className="mx-0 my-1 w-full font-normal" href="/dashboard/my-profiles">آگهی های من</Link>
        <Link className="mx-0 my-1 w-full font-normal" href="/dashboard/add">ثبت آگهی</Link>
        {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DashboardSidebar;
