"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { pixelLead } from "@/lib/meta-pixel";

type Status = "idle" | "submitting" | "error";

export function RegisterForm({ id }: { id: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/masterclass-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        pixelLead();
        try {
          localStorage.setItem("pams_registered_at", new Date().toISOString());
        } catch {
          // localStorage may be unavailable (private browsing, etc.)
        }
        router.push("/masterclass/watch");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline focus:outline-2 focus:outline-ring transition-colors";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor={`${id}-firstName`} className={labelClass}>
          First name <span aria-hidden className="text-muted-foreground">*</span>
        </label>
        <input
          id={`${id}-firstName`}
          name="firstName"
          type="text"
          required
          autoComplete="given-name"
          className={fieldClass}
          placeholder="First name"
        />
      </div>

      <div>
        <label htmlFor={`${id}-email`} className={labelClass}>
          Email address <span aria-hidden className="text-muted-foreground">*</span>
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder="your@email.com"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
      >
        {status === "submitting" ? "One moment…" : "Watch the Free Training"}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Free. No credit card required.
      </p>
    </form>
  );
}
