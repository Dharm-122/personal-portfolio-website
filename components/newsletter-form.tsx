"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

type Values = { email: string };

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, reset } = useForm<Values>();

  const onSubmit = async (values: Values) => {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) return;
    reset();
    setDone(true);
    setTimeout(() => setDone(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={compact ? "grid gap-3" : "flex flex-col gap-3 sm:flex-row"}>
      <input
        {...register("email", { required: true })}
        placeholder="Email address"
        className="input min-w-0 flex-1"
        aria-label="Email address"
      />
      <Button type="submit">{done ? "Subscribed" : "Subscribe"}</Button>
    </form>
  );
}
