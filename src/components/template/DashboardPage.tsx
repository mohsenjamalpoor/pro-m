

function DashboardPage({ createdAt }:any) {
  return (
    <div>
      <h3 className="font-normal mb-5 text-[#304ffe] text-2xl">سلام 👋</h3>
      <p className="text-[#808080]">آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className="flex bg-[#304ffe18] rounded-[10px] mt-24 w-fit py-1 px-2.5">
        <p className="m-0 font-normal ml-2.5">تاریخ عضویت:</p>
        <span className="text-[#304ffe]">{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
}

export default DashboardPage;
