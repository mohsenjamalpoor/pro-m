import DashboardCard from "@/components/module/DashboardCard";


function MyProfilesPage({ profiles }:any) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="bg-[#db050529] text-[#db0505] rounded-[10px] py-2.5 px-4 text-xl">هیچ آگهی ثبت نشده است</p>
      )}
      {profiles.map((i:any) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
