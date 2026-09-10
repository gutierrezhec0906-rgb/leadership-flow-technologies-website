"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const inputClasses =
  "w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-mid-green focus:outline-none focus:ring-2 focus:ring-mid-green/20";

export default function ContactForm({ content }) {
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
      const res = await fetch("/api/contact", {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-dark-green">
            {content.name} *
          </label>
          <input
            id="name"
            className={inputClasses}
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: content.nameRequired })}
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-dark-green">
            {content.company}
          </label>
          <input id="company" className={inputClasses} {...register("company")} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-dark-green">
            {content.email} *
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: content.emailRequired,
              pattern: { value: /^\S+@\S+\.\S+$/, message: content.emailInvalid },
            })}
          />
          {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-dark-green">
            {content.phone}
          </label>
          <input id="phone" type="tel" className={inputClasses} {...register("phone")} />
        </div>
      </div>

      <div>
        <label htmlFor="leaderCount" className="mb-1.5 block text-sm font-semibold text-dark-green">
          {content.leaderCount}
        </label>
        <select id="leaderCount" defaultValue="" className={inputClasses} {...register("leaderCount")}>
          <option value="" disabled>
            {content.selectRange}
          </option>
          {content.leaderCountOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-dark-green">
          {content.message} *
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", { required: content.messageRequired })}
        />
        {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <Icon name="Loader2" className="animate-spin" size={18} />
        ) : (
          <>
            {content.submit} <Icon name="Send" size={18} />
          </>
        )}
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm font-medium text-mid-green">
          <Icon name="CheckCircle2" size={18} /> {content.success}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm font-medium text-red-600">
          <Icon name="AlertCircle" size={18} /> {content.error}
        </p>
      )}
    </form>
  );
}
