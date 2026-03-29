import webpush from "web-push";
import { PushSubscriptionJSON } from "../app/types/push";

webpush.setVapidDetails(
  "mailto:test@test.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC!,
  process.env.VAPID_PRIVATE!
);

interface PushPayload {
  title: string;
  body: string;
  url: string;
}

export async function sendPush(
  sub: PushSubscriptionJSON,
  payload: PushPayload
) {
  await webpush.sendNotification(
    sub,
    JSON.stringify(payload)
  );
}