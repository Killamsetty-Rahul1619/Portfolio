import { about } from "../data/about";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const initials = profile.fullName
  .split(" ")
  .map((part) => part[0])
  .join("");

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="About" title="Turning data into decisions" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {about.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-soft font-display text-2xl text-primary"
                aria-hidden="true"
              >
                {initials}
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-foreground">
                  {profile.fullName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {profile.currentRole} at {profile.currentCompany}
                </p>
              </div>
            </div>

            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-2xl border border-border bg-background p-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {highlight.label}
                  </dt>
                  <dd className="mt-1 font-heading text-base font-bold text-foreground">
                    {highlight.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
