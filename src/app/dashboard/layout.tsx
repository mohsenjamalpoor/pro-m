import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

export const metadata = {
  title: "پنل کاربری املاک ",
};

async function DashboardLayout({ children }:any) {
  const session:any = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  await connectDB();
  const user:any = await User.findOne({ email: session?.user?.email });

  if (!user) return <h3>مشکلی پیش آمده است</h3>;

  return (
    
    <DashboardSidebar role={user.role} email={user.email}>
      {children}
    </DashboardSidebar>
  );
}

export default DashboardLayout;
