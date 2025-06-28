"use client";
import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export default function InstallButton() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      // Type guard to check for prompt and userChoice
      if (
        e instanceof Event &&
        "prompt" in e &&
        typeof (e as BeforeInstallPromptEvent).prompt === "function" &&
        "userChoice" in e &&
        typeof (e as BeforeInstallPromptEvent).userChoice === "object"
      ) {
        e.preventDefault();
        setPrompt(e as BeforeInstallPromptEvent);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!prompt) return null;

  return (
    <button
      onClick={() => {
        prompt.prompt();
        prompt.userChoice.then(() => setPrompt(null));
      }}
    >
      Install App
    </button>
  );
}
