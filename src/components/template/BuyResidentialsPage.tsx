import Sidebar from "@/components/module/Sidebar";
import Card from "@/components/module/Card";


function BuyResidentialsPage({ data }:any) {
  return (
    <div className="flex justify-between mt-20">
      <div className="flex items-center flex-col rounded-[10px] ml-10 w-56 h-fit py-7 px-4 shadow-[#304ffe4a] shadow-[0_4px_15px]">
        <Sidebar />
      </div>
      <div className="w-full flex flex-wrap justify-between">
        {data.length ? null : (
          <p className="text-[#db0505] bg-[#db050529] rounded-[10px] h-12 py-2.5 px-4 text-xl">هیچ آگهی ثبت نشده است</p>
        )}
        {data.map((profile:any) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialsPage;
