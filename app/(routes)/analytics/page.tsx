import { countPassword } from "@/lib/countPasswords";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Analytics = async () => {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      elements: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!user || !user.elements) return redirect("/");

  const { unique, repeated } = countPassword(user.elements);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 mb-4">
        <div>First block</div>
        <div>Second block</div>
      </div>
      <div>Block</div>
    </div>
  );
};

export default Analytics;
