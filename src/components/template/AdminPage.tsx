import AdminCard from "@/components/module/AdminCard";


function AdminPage({ profiles }:any) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="text-[#db0505] text-xl bg-[#db050529] rounded-[10px] py-2.5 px-4">هیچ آگهی در انتظار تاییدی وجود ندارد</p>
      )}
      {profiles.map((i:any) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default AdminPage;
