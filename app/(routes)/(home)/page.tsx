import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { HeaderMain } from "./components/HeaderMain";

const Home = async () => {
  const session = await getServerSession();
  console.log(session);
  if (!session || !session.user?.email) {
    return redirect("/");
  }

  const user = await db.user.findUnique({
    where: { email: session.user.email },
    include: {
      elements: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!user) return redirect("/");

  return (
    <div>
      <HeaderMain userId={user.id} />
    </div>
  );
};

export default Home;
