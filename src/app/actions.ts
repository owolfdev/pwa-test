"use server";

import webpush from "web-push";
import type { PushSubscription as WebPushSubscription } from "web-push";

webpush.setVapidDetails(
  "mailto:your-email@example.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

let subscription: WebPushSubscription | null = null;

type PushSubscriptionJSON = {
  endpoint: string;
  expirationTime?: number | null;
  keys?: {
    p256dh?: string;
    auth?: string;
  };
};

export async function subscribeUser(sub: PushSubscriptionJSON) {
  if (!sub.endpoint) throw new Error("PushSubscription must have an endpoint");
  subscription = sub as unknown as WebPushSubscription; // type-cast for web-push compatibility
  return { success: true };
}

export async function unsubscribeUser() {
  subscription = null;
  return { success: true };
}

export async function sendNotification(message: string) {
  if (!subscription) throw new Error("No subscription available");
  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: "Test Notification",
        body: message,
        icon: "/icon.png",
      })
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
}
