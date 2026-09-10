"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function NewsletterForm({ content }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [status, setStatus] = useState("idle");

  const onSubmit = async (data) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8 max-w-md" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1 text-left">
          <label htmlFor="newsletter-email" className="sr-only">
            {content.emailSrOnlyLabel}
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder={content.placeholder}
            aria-invalid={errors.email ? "true" : "false"}
            className="w-full rounded-full border-2 border-white/20 bg-white/10 px-5 py-3 text-off-white placeholder:text-off-white/50 focus:border-teal-light focus:outline-none"
            {...register("email", {
              required: content.emailRequired,
              pattern: { value: /^\S+@\S+\.\S+$/, message: content.emailInvalid },
            })}
          />
          {errors.email && <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>}
        </div>
        <Button type="submit" variant="ghost" size="md" disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? <Icon name="Loader2" className="animate-spin" size={18} /> : content.submit}
        </Button>
      </div>
      {status === "success" && <p className="mt-3 text-sm font-medium text-teal-light">{content.success}</p>}
      {status === "error" && <p className="mt-3 text-sm font-medium text-red-300">{content.error}</p>}
    </form>
  );
}
