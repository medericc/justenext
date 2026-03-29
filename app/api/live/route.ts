import { NextResponse } from "next/server";
import { isLive } from "@/lib/tiktok";

const users = ["agakur01", "betikamer237", "hummm_o.k", "heavenradio"];

export async function GET() {
  const results = await Promise.all(
    users.map(async (user) => ({
      user,
      live: await isLive(user)
    }))
  );

  return NextResponse.json(results);
}