import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <Section id="education">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="A strong grounding in computer science with a focus on applied AI and robotics."
        />
      </Reveal>

      <div className="mt-10 grid gap-6">
        {education.map((entry, index) => (
          <Reveal key={`${entry.degree}-${entry.institution}`} delay={index * 0.08}>
            <article className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-on-primary">
                    <GraduationCap aria-hidden="true" className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                      {entry.degree} in {entry.field}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {entry.institution} · {entry.location}
                    </p>
                    {entry.note ? (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {entry.note}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-center gap-10 sm:justify-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Graduated
                    </p>
                    <p className="font-display text-4xl text-primary">
                      {entry.year}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      CGPA
                    </p>
                    <p className="font-display text-4xl text-foreground">
                      {entry.cgpa}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
