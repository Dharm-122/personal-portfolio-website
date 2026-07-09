"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  businessName: z.string().min(2),
  serviceNeeded: z.string().min(2),
  budget: z.string().min(1),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Submission failed");
      reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3500);
    } catch {
      setSubmitError("We could not send your message right now. Please try again.");
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 rounded-[28px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.9),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" error={errors.name?.message}>
            <input {...register("name")} className="input" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} className="input" />
          </Field>
          <Field label="Phone" error={errors.phone?.message}>
            <input {...register("phone")} className="input" />
          </Field>
          <Field label="Business Name" error={errors.businessName?.message}>
            <input {...register("businessName")} className="input" />
          </Field>
          <Field label="Service Needed" error={errors.serviceNeeded?.message}>
            <input {...register("serviceNeeded")} className="input" />
          </Field>
          <Field label="Budget" error={errors.budget?.message}>
            <input {...register("budget")} className="input" />
          </Field>
        </div>
        <Field label="Message" error={errors.message?.message}>
          <textarea {...register("message")} rows={6} className="input resize-none" />
        </Field>
        <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
          Submit Inquiry
        </Button>
        {submitError ? <p className="text-sm text-red-400">{submitError}</p> : null}
      </form>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute inset-x-0 bottom-4 mx-auto w-[calc(100%-2rem)] rounded-3xl border border-sage-400/20 bg-[#121224] px-5 py-4 text-center text-white shadow-[0_20px_80px_rgba(0,0,0,.4)] sm:w-[calc(100%-4rem)]"
        >
          Thank you. Your message has been received successfully.
        </motion.div>
      ) : null}
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-white">{label}</span>
      {children}
      {error ? <span className="text-xs text-red-400">{error}</span> : null}
    </label>
  );
}
