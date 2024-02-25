const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL;

const authToken = process.env.UPSTASH_REDIS_REST_TOKEN;

type Commands = "zrange" | "sismember" | "get" | "smembers";

export async function fetchRedis(
  commands: Commands,
  ...args: (string | number)[]
) {
  const commadUrl = `${upstashRedisRestUrl}/${commands}/${args.join("/")}`;

  const response = await fetch(commadUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Error executing Redis command: ${response.statusText}`);
  }

  const data = await response.json();
  return data.result;
}
