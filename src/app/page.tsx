import { db } from "@/lib/db";

export default async function Home() {
  await db.set("heloo", "Hleosd");

  return <div className="text-red"> HElolw</div>;
}
