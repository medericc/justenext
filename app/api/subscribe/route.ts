import { subs } from "@/lib/store";

export async function POST(req: Request) {
  const body = await req.json();
  subs.push(body);

  return Response.json({ ok: true });
}