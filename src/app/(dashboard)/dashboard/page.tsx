import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return <div>Dashboard</div>;
};

export default page;

// 1.30
