"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { PERSON } from "@/lib/data";
import Reveal from "../ui/Reveal";

type Status = "idle" | "sending" | "success" | "error";

const inputBase =
  "w-full rounded-xl border bg-[var(--card)] px-4 py-3 text-[0.95rem] text-[var(--text)] outline-none transition-all duration-200 placeholder:text-[var(--muted)] focus:ring-2 focus:ring-[rgba(124,92,252,0.16)]";
const labelBase =
  "mb-2 block font-[var(--font-mono)] text-[0.8rem] font-medium tracking-[0.05em] text-[var(--muted)]";
const cardLinkBase =
  "flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-sm text-[var(--text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--violet)] hover:bg-[var(--violet-lo)] hover:text-[var(--violet)]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setServerError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setServerError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[var(--surface)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left – info */}
        <Reveal>
          <p className="mb-3 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cyan)]">
            Get in touch
          </p>
          <h2 className="mb-5 font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Let&apos;s build something great.
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Open to freelance projects, full-time roles, or just a good conversation about web development.
          </p>

          <div className="flex flex-col gap-3">
            {[
              { icon: "✉", label: PERSON.email,           href: `mailto:${PERSON.email}` },
              { icon: "in", label: "linkedin.com/in/gustaavoevangelista", href: PERSON.linkedin },
              { icon: "⌥", label: "github.com/gustaavoevangelista", href: PERSON.github },
            ].map(({ icon, label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={cardLinkBase}
              >
                <span className="min-w-5 text-center text-base">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right – form */}
        <Reveal delayClassName="delay-[150ms]">
          {status === "success" ? (
            <div
              className="rounded-2xl border border-emerald-400/60 bg-[var(--card)] p-8 text-center sm:p-10"
            >
              <div className="mb-4 text-5xl">✓</div>
              <h3 className="mb-2 font-[var(--font-display)] text-2xl font-bold text-white">
                Message sent!
              </h3>
              <p className="mb-6 text-[var(--muted)]">
                I&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="rounded-full border border-[var(--border)] px-6 py-2.5 text-sm text-[var(--muted)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

              {/* Name */}
              <div>
                <label className={labelBase}>
                  Your name *
                </label>
                <input
                  {...register("name")}
                  placeholder="Gustavo Evangelista"
                  autoComplete="name"
                  className={clsx(
                    inputBase,
                    errors.name
                      ? "border-red-400 ring-2 ring-red-400/15"
                      : touchedFields.name && !errors.name
                      ? "border-emerald-400 ring-2 ring-emerald-400/15"
                      : "border-[var(--border)]"
                  )}
                />
                {errors.name && (
                  <p className="mt-2 flex items-center gap-1 font-[var(--font-mono)] text-[0.78rem] text-red-400">⚠ {errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className={labelBase}>
                  Email address *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="hello@example.com"
                  autoComplete="email"
                  className={clsx(
                    inputBase,
                    errors.email
                      ? "border-red-400 ring-2 ring-red-400/15"
                      : touchedFields.email && !errors.email
                      ? "border-emerald-400 ring-2 ring-emerald-400/15"
                      : "border-[var(--border)]"
                  )}
                />
                {errors.email && (
                  <p className="mt-2 flex items-center gap-1 font-[var(--font-mono)] text-[0.78rem] text-red-400">⚠ {errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className={labelBase}>
                  Subject *
                </label>
                <input
                  {...register("subject")}
                  placeholder="Project enquiry"
                  className={clsx(
                    inputBase,
                    errors.subject
                      ? "border-red-400 ring-2 ring-red-400/15"
                      : touchedFields.subject && !errors.subject
                      ? "border-emerald-400 ring-2 ring-emerald-400/15"
                      : "border-[var(--border)]"
                  )}
                />
                {errors.subject && (
                  <p className="mt-2 flex items-center gap-1 font-[var(--font-mono)] text-[0.78rem] text-red-400">⚠ {errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className={labelBase}>
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className={clsx(
                    inputBase,
                    "resize-none",
                    errors.message
                      ? "border-red-400 ring-2 ring-red-400/15"
                      : touchedFields.message && !errors.message
                      ? "border-emerald-400 ring-2 ring-emerald-400/15"
                      : "border-[var(--border)]"
                  )}
                />
                {errors.message && (
                  <p className="mt-2 flex items-center gap-1 font-[var(--font-mono)] text-[0.78rem] text-red-400">⚠ {errors.message.message}</p>
                )}
              </div>

              {/* Server error */}
              {status === "error" && serverError && (
                <div className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-400">
                  ⚠ {serverError}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--violet)] px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_24px_rgba(124,92,252,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(124,92,252,0.55)] disabled:cursor-not-allowed disabled:bg-[var(--border)] disabled:shadow-none disabled:hover:translate-y-0 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Spinner /> Sending…
                  </>
                ) : (
                  "Send message →"
                )}
              </button>

              <p className="font-[var(--font-mono)] text-[0.75rem] text-[var(--muted)]">
                * All fields are required
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Spinner() {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16"
      className="animate-spin"
    >
      <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="25 10" />
    </svg>
  );
}
