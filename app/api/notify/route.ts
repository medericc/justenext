import { isLive } from "@/lib/tiktok";
import { subs } from "@/lib/store";
import { sendPush } from "@/lib/push";

const users = ["jude","nez","fantassin","gabriel"];

const previous: Record<string, boolean> = {};

export async function GET() {

  for(const user of users){
    const live = await isLive(user);

    if(live && !previous[user]){

      for(const sub of subs){
        await sendPush(sub,{
          title:`🔴 ${user} est en LIVE`,
          body:"Toucher pour ouvrir",
          url:`https://tiktok.com/@${user}/live`
        });
      }
    }

    previous[user]=live;
  }

  return Response.json({ok:true});
}