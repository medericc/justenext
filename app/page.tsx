"use client";

import { useEffect, useState } from "react";
type User = {
  user: string;
  live: boolean;
};
export default function Home() {
    const [users, setUsers] = useState<User[]>([]);

  async function load() {
    const res = await fetch("/api/live");
    setUsers(await res.json());
  }

  async function enableNotif() {
    const reg = await navigator.serviceWorker.register("/sw.js");
function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
  urlBase64ToUint8Array(
    process.env.NEXT_PUBLIC_VAPID_PUBLIC!
  )
    });

    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(sub)
    });

    alert("Notifications activées 🔔");
  }

 useEffect(() => {
  const init = async () => {
    await load();
  };

  init();

  const i = setInterval(load, 30000);
  return () => clearInterval(i);
}, []);

  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">
        Live Tracker
      </h1>

      <button
        onClick={enableNotif}
        className="mb-6 bg-black text-white px-4 py-2 rounded"
      >
        Activer notifications
      </button>

      {users.map((u) => (
        <div
          key={u.user}
          className="text-xl mb-3"
        >
          {u.live ? "🔴" : "⚫"} {u.user}
        </div>
      ))}
    </main>
  );
}