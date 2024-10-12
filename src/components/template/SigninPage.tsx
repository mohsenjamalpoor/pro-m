"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";
import Loader from "@/components/module/Loader";


function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-[90vh] ">
      <h4  className="text-[#304ffe] font-semibold text-4xl mb-5">فرم ورود</h4>
      <form className="flex flex-col font-bold mb-8 max-w-3xl shadow-[#304ffe4a] shadow-[0_4px_15px] rounded-[10px] p-10 border-2 border-solid border-[#304ffe]">
        <label className="text-[#304ffe] mb-2.5 font-normal">ایمیل:</label>
        <input dir="ltr" className="mb-10 w-64 border border-dashed border-[#304ffe] text-[#6b7280] rounded-[5px] p-2.5 h-10 text-base  focus:border-solid"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label  className="text-[#304ffe] mb-2.5 font-normal">رمز عبور:</label>
        <input dir="ltr" className="mb-10 w-64 border border-dashed border-[#304ffe] text-[#6b7280] rounded-[5px] p-2.5 h-10 text-base  focus:border-solid"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? (
          <Loader />
        ) : (
          <button className="border-none bg-[#304ffe] text-white font-normal rounded-[5px] cursor-pointer text-lg py-2 px-0 transition-all ease-in delay-100 hover:scale-105" type="submit" onClick={signinHandler}>
            ثبت نام
          </button>
        )}
      </form>
      <p className="text-lg text-gray-500">
        حساب کاربری ندارید؟
        <Link className="text-[#304ffe] mr-2.5 border-b-2 border-solid border-[#6b7280]" href="/signup">ثبت نام</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SigninPage;
