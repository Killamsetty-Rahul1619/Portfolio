import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const raf = requestAnimationFrame(() => {
      drawerRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button",
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-display text-2xl tracking-wide text-foreground"
        >
          RAHUL<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-primary-soft hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#ai-twin"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary shadow-sm transition-all duration-150 hover:bg-primary-strong active:scale-95 sm:inline-flex"
          >
            Talk to AI Twin
          </a>

          <button
            ref={toggleRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors duration-200 hover:bg-muted lg:hidden"
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/40 lg:hidden"
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              ref={drawerRef}
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-background p-6 shadow-xl lg:hidden"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="font-display text-2xl tracking-wide">
                  RAHUL<span className="text-primary">.</span>
                </p>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors duration-200 hover:bg-muted"
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:bg-primary-soft"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#ai-twin"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-on-primary transition-all duration-150 hover:bg-primary-strong active:scale-95"
              >
                Talk to My AI Twin
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
