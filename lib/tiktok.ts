export async function isLive(username: string) {
  const res = await fetch(
    `https://www.tiktok.com/@${username}/live`,
    {
      redirect: "manual"
    }
  );

  return res.status === 200;
}