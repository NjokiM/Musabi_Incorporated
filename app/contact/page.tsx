import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquiries across Musabi Incorporated and its six entities. Every engagement is designed as the beginning of a long-term relationship.",
};

const journey = [
  "Discover",
  "Engage",
  "Understand",
  "Design",
  "Deliver",
  "Evaluate",
  "Grow together",
];

export default function ContactPage() {
  return (
    <PageShell
      kicker="Contact"
      title="Start a conversation"
      lede="Every engagement is designed as the beginning of a long-term relationship rather than a single transaction."
    >
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              What happens next
            </h2>
            <ol className="mt-5 space-y-3">
              {journey.map((stage, i) => (
                <li key={stage} className="flex items-baseline gap-4 text-sm">
                  <span className="font-medium text-charcoal/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold">{stage}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-charcoal/60">
              We begin by listening. Your enquiry is read by a person, and
              routed to the entity best placed to respond.
            </p>
          </section>

          <section className="border border-charcoal/15 bg-white/50 p-6 text-sm leading-relaxed text-charcoal/65">
            <p className="font-semibold text-charcoal">Office and direct lines</p>
            <p className="mt-2">
              The registered office address, telephone lines and entity email
              addresses are being finalised and will be published here.
            </p>
          </section>
        </div>

        <ContactForm />
      </div>
    </PageShell>
  );
}
