"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import TextInput from "@/components/module/TextInput";
import RadioList from "@/components/module/RadioList";
import TextList from "@/components/module/TextList";
import CustomDatePicker from "@/components/module/CustomDatePicker";
import Loader from "@/components/module/Loader";



function AddProfilePage({ data }:any) {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) setProfileData(data);
  }, []);

  const router = useRouter();

  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col mb-36">
      <h3 className="w-full mb-20 font-normal text-2xl bg-[#304ffe18] text-[#304ffe] rounded-[10px] py-2.5 px-4">{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {loading ? (
        <Loader />
      ) : data ? (
        <button className="border-none bg-[#304ffe] text-white rounded-[5px] cursor-pointer p-2.5 text-base transition-all ease-in delay-100 hover:scale-105" onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className="border-none bg-[#304ffe] text-white rounded-[5px] cursor-pointer p-2.5 text-base transition-all ease-in delay-100 hover:scale-105" onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
