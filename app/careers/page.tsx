import type { Metadata } from "next";
import { values } from "@/lib/site";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Musabi Incorporated invests in people before infrastructure — mentorship, continuous learning and leadership development.",
};

export default function CareersPage() {
  return (
    <>
      <PageShell
        kicker="Careers"
        title="Build with us"
        lede="Our greatest asset is not our portfolio — it is our people. Strong organisations are built by strong people."
      >
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              How we grow people
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-charcoal/75">
              We create an environment where individuals are encouraged to
              learn, collaborate, innovate and grow professionally — investing
              not only in technical skills, but in character, integrity and
              leadership.
            </p>
            <ul className="mt-5 grid max-w-3xl gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <li
                  key={value.name}
                  className="border-t border-charcoal/10 pt-3 text-sm"
                >
                  <span className="font-semibold">{value.name}</span>
                  <span className="text-charcoal/60"> — {value.meaning.split(".")[0].toLowerCase()}.</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Openings
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-charcoal/75">
              No roles are open at the moment. When positions open, they will
              be listed on this page. Speculative applications are welcome:
              tell us who you are, the standard you hold yourself to, and what
              you would bring to the institution.
            </p>
          </section>
        </div>
      </PageShell>
      <CtaBand
        title="Introduce yourself."
        body="Send a speculative application through the contact form and select Careers."
      />
    </>
  );
}
