"use client";
import { Button, ThemeToggle } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-2">
      <ThemeToggle />
      <Button>{"shadcn Button in Web!"}</Button>
    </main>
  );
}
