"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/apply", {
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
          Your request has been received.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Thank you for reaching out. Requests are reviewed individually,
          and you will receive a response within 5–7 business days to
          schedule your free call. Please check your email, including your
          spam folder.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline focus:outline-2 focus:outline-ring transition-colors";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First name <span aria-hidden className="text-muted-foreground">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={fieldClass}
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last name <span aria-hidden className="text-muted-foreground">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={fieldClass}
            placeholder="Last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email address <span aria-hidden className="text-muted-foreground">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="applicationStatus" className={labelClass}>
          Where are you in your PA school journey? <span aria-hidden className="text-muted-foreground">*</span>
        </label>
        <select
          id="applicationStatus"
          name="applicationStatus"
          required
          className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select your current stage
          </option>
          <option value="early-pre-pa">Early in my pre-PA path (prerequisites in progress)</option>
          <option value="building-experience">Building clinical experience, 2+ years from applying</option>
          <option value="preparing-to-apply">Preparing to apply in the next 1–2 years</option>
          <option value="actively-applying">Applying this cycle</option>
          <option value="reapplicant">Reapplicant</option>
          <option value="unsure">Unsure of my timeline</option>
        </select>
      </div>

      <div>
        <label htmlFor="pathwayInterest" className={labelClass}>
          Which mentorship pathway are you considering?
        </label>
        <select
          id="pathwayInterest"
          name="pathwayInterest"
          className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select a pathway (or unsure)
          </option>
          <option value="1-year">1-Year Mentorship ($5,000)</option>
          <option value="2-year">2-Year Mentorship ($7,000)</option>
          <option value="3-year">3-Year Mentorship ($10,000)</option>
          <option value="unsure">Unsure: I would like guidance</option>
        </select>
      </div>

      <div>
        <label htmlFor="statement" className={labelClass}>
          Briefly describe what you are hoping to work on.{" "}
          <span aria-hidden className="text-muted-foreground">*</span>
        </label>
        <p className="text-xs text-muted-foreground mb-2">
          A few sentences is enough. This is not your personal statement.
        </p>
        <textarea
          id="statement"
          name="statement"
          required
          rows={5}
          className={fieldClass}
          placeholder="What brings you to PA Mentor Studio, and what do you most want support with?"
        />
      </div>

      <div>
        <label htmlFor="referral" className={labelClass}>
          How did you hear about PA Mentor Studio?
        </label>
        <input
          id="referral"
          name="referral"
          type="text"
          className={fieldClass}
          placeholder="Word of mouth, web search, PAEA, etc."
        />
      </div>

      <div>
        <label htmlFor="questions" className={labelClass}>
          Any questions before a consultation?
        </label>
        <textarea
          id="questions"
          name="questions"
          rows={3}
          className={fieldClass}
          placeholder="Optional: anything you would like addressed before or during a consultation."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          Something went wrong. Please try again or email directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
      >
        {status === "submitting" ? "Submitting…" : "Request My Free Call"}
      </button>

      <p className="text-xs text-muted-foreground">
        Submitting this form does not create a financial obligation. A
        free call will be offered if there appears to be a potential fit.
      </p>
    </form>
  );
}
