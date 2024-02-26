import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { notFound } from "next/navigation";
import { FC } from "react";

const page: FC = async ({}) => {
  const session = await getServerSession(authOptions);
  if (!session) notFound();

  const incomingSenderIds = (await fetchRedis(
    "smembers",
    `user:${session.user.id}:incoming_friend_requests`
  )) as string[];

  const incomingFriendRequest = await Promise.all(
    incomingSenderIds.map(async (senderId) => {
      const sender = (await fetchRedis("get", `user:${senderId}`)) as User;

      return {
        sender,
        senderEmail: sender.email,
      };
    })
  );

  console.log(incomingFriendRequest);

  return <div>page</div>;
};

export default page;

// 3.12
