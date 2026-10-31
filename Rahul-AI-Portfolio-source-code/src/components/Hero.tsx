import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { config } from "../config";
import { profile } from "../data/profile";
import CartoonDeveloper from "./CartoonDeveloper";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const socialLinks = [
  { label: "GitHub", href: config.social.github, Icon: SiGithub },
  { label: "LinkedIn", href: config.social.linkedin, Icon: FaLinkedinIn },
  { label: "Email", href: `mailto:${config.contact.email}`, Icon: Mail },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-8 lg:pt-20">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex flex-wrap gap-2">
            {profile.heroLabels.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-foreground"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 font-heading text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground"
          >
            {profile.fullName.split(" ")[0]}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-1 font-display leading-[0.85] tracking-tight text-foreground text-[clamp(4.5rem,15vw,12rem)]"
          >
            {profile.wordmark}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-hand text-2xl text-primary sm:text-3xl"
          >
            &ldquo;{profile.handwrittenQuote}&rdquo;
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#ai-twin"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-sm transition-all duration-150 hover:bg-primary-strong active:scale-95"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Talk to My AI Twin
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all duration-150 hover:border-foreground active:scale-95"
            >
              Explore Projects
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              Find me on
            </span>
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-all duration-150 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm pt-6 sm:max-w-md"
        >
          <div className="absolute left-1/2 top-0 z-10 w-[82%] -translate-x-1/2">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-2xl border border-border bg-white px-4 py-3 text-center shadow-lg">
                <p className="font-hand text-lg leading-snug text-foreground">
                  {profile.speechBubble}
                </p>
              </div>
              <div
                className="mx-auto -mt-1 h-4 w-4 rotate-45 border-b border-r border-border bg-white"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          <CartoonDeveloper />
        </motion.div>
      </div>
    </section>
  );
}
