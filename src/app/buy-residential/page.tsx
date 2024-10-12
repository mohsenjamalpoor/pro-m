import BuyResidentialsPage from "@/components/template/BuyResidentialsPage";

async function BuyResidentials({ searchParams }:any) {
  // بهتر است در کامپوننت های سرورساید از ای پی آی روت استفاده نکنیم(این مورد حالت تمرینی دارد)
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await  res.json();
//@ts-ignore
if (data.error) return <h3>مشکلی پیش آمده است</h3>;
//@ts-ignore

let finalData = data.data;
if (searchParams.category) {
    //@ts-ignore
    finalData = finalData?.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidentials;
