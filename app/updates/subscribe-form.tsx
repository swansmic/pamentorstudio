"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function SubscribeForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded border border-border bg-card p-8 text-center space-y-4">
        <p className="font-heading text-xl font-semibold text-foreground">
          You&rsquo;re on the list.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Thank you for signing up. Keep an eye on your inbox, including
          your spam folder, for admissions updates from Michelle.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline focus:outline-2 focus:outline-ring transition-colors";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="update-firstName" className={labelClass}>
          First name <span aria-hidden className="text-muted-foreground">*</span>
        </label>
        <input
          id="update-firstName"
          name="firstName"
          type="text"
          required
          autoComplete="given-name"
          className={fieldClass}
          placeholder="First name"
        />
      </div>

      <div>
        <label htmlFor="update-email" className={labelClass}>
          Email address <span aria-hidden className="text-muted-foreground">*</span>
        </label>
        <input
          id="update-email"
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
        {status === "submitting" ? "One moment…" : "Stay Updated"}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
