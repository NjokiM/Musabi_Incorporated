"use client";

import { useState } from "react";
import { entities } from "@/lib/site";

export default function ContactForm({
  defaultEntity = "general",
}: {
  defaultEntity?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const options = [
    { value: "general", label: "General enquiry" },
    ...entities.map((entity) => ({ value: entity.slug, label: entity.name })),
    { value: "moses-musabi", label: "Moses Musabi" },
    { value: "careers", label: "Careers" },
    { value: "partnerships", label: "Partnerships" },
  ];

  if (submitted) {
    return (
      <div className="border border-charcoal/15 bg-white/50 p-8">
        <h3 className="text-lg font-semibold">Thank you.</h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
          Your message has been received. We read every enquiry and respond
          thoughtfully — usually within two working days.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium">Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1.5 w-full border border-charcoal/20 bg-white/60 px-3 py-2.5 text-base outline-none transition-colors focus:border-charcoal"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1.5 w-full border border-charcoal/20 bg-white/60 px-3 py-2.5 text-base outline-none transition-colors focus:border-charcoal"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium">Organisation</span>
          <input
            type="text"
            name="organisation"
            className="mt-1.5 w-full border border-charcoal/20 bg-white/60 px-3 py-2.5 text-base outline-none transition-colors focus:border-charcoal"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Entity</span>
          <select
            name="entity"
            defaultValue={defaultEntity}
            className="mt-1.5 w-full border border-charcoal/20 bg-white/60 px-3 py-2.5 text-base outline-none transition-colors focus:border-charcoal"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm">
        <span className="font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="mt-1.5 w-full resize-y border border-charcoal/20 bg-white/60 px-3 py-2.5 text-base outline-none transition-colors focus:border-charcoal"
        />
      </label>
      <div>
        <button
          type="submit"
          className="bg-charcoal px-7 py-3 text-sm tracking-wide text-ivory transition-opacity hover:opacity-85"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
