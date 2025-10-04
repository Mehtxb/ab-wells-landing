// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Briefcase, Layers, LineChart, Mail, Phone, MapPin } from "lucide-react";

// // ---------------------------------------------
// // Minimal, black & white consulting landing page
// // Tech: TypeScript + React + TailwindCSS + Framer Motion + Lucide icons
// // Four sections: Hero, Services, About, Contact
// // ---------------------------------------------

// // Utility: simple container
// const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
//   <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
// );

// // Nav link model
// type NavItem = { id: string; label: string };
// const NAV: NavItem[] = [
//   { id: "hero", label: "Home" },
//   { id: "services", label: "Services" },
//   { id: "about", label: "About" },
//   { id: "contact", label: "Contact" },
// ];

// // Smooth scroll helper
// const scrollToId = (id: string) => {
//   const el = document.getElementById(id);
//   if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
// };

// // Section wrapper
// const Section: React.FC<React.PropsWithChildren<{ id: string; className?: string }>> = ({ id, className = "", children }) => (
//   <section id={id} className={`scroll-mt-24 py-20 ${className}`}>{children}</section>
// );

// // Card
// const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
//   <div className={`rounded-2xl border border-black/10 bg-white p-6 shadow-sm ${className}`}>{children}</div>
// );

// // Button (unstyled, black & white only)
// const Button: React.FC<React.PropsWithChildren<{ onClick?: () => void; href?: string; variant?: "solid" | "ghost"; className?: string }>> = ({ onClick, href, children, variant = "solid", className = "" }) => {
//   const base = "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-transform active:scale-[0.98]";
//   const styles = variant === "ghost"
//     ? "border border-black/10 bg-transparent text-black hover:bg-black hover:text-white"
//     : "bg-black text-white hover:opacity-90";

//   if (href) {
//     return (
//       <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
//         {children}
//       </a>
//     );
//   }
//   return (
//     <button onClick={onClick} className={`${base} ${styles} ${className}`}>
//       {children}
//     </button>
//   );
// };

// // Badge
// const Badge: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
//   <span className={`inline-block rounded-full border border-black/10 bg-white px-3 py-1 text-xs uppercase tracking-wide text-black/60 ${className}`}>
//     {children}
//   </span>
// );

// // Main component (default export)
// const ConsultingLandingPage: React.FC = () => {
//   // EDITABLE: Basic site info (brand, tagline, description)
//   const BRAND = "Ashbourne & Wells"; // e.g., "Ashbourne & Wells"
//   const TAGLINE = "Clarity. Execution. Results.";
//   const LEDE = "We help businesses look sharp and scale with confidence—without adding chaos.";

//   // EDITABLE: Services
//   const SERVICES = [
//     {
//       icon: <Briefcase className="h-6 w-6" aria-hidden />,
//       title: "Strategy & Roadmapping",
//       text: "Prioritized, outcome-driven plans that align stakeholders and unlock momentum.",
//     },
//     {
//       icon: <Layers className="h-6 w-6" aria-hidden />,
//       title: "Delivery & QA Systems",
//       text: "Lightweight processes, CI/CD, and test harnesses that raise quality and speed.",
//     },
//     {
//       icon: <LineChart className="h-6 w-6" aria-hidden />,
//       title: "Analytics & Optimization",
//       text: "Instrumentation and feedback loops to measure what matters and iterate smarter.",
//     },
//   ];

//   // EDITABLE: About
//   const ABOUT = {
//     heading: "Pragmatic partners, not slide-makers",
//     body: `We're builders at heart. We partner with founders and product teams to solve real problems, ship real features, and
//     leave you with durable systems—not dependency. Our approach is transparent, test-driven, and tailored to your constraints.`,
//     bullets: [
//       "Senior hands-on expertise",
//       "Clear comms, weekly outcomes",
//       "Right-sized process, zero theatre",
//     ],
//   } as const;

//   // EDITABLE: Contact (no backend; mailto fallback). Update address/phone as needed.
//   const CONTACT = {
//     email: "info@abwells.ca",
//     phone: "+1 (289) 200-8428",
//     address: "Toronto, ON",
//   } as const;

//   return (
//     <div className="min-h-screen bg-white text-black">
//       {/* Header */}
//       <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
//         <Container className="flex h-16 items-center justify-between">
//           <a href="#hero" className="font-semibold tracking-tight">{BRAND}</a>
//           <nav className="hidden gap-6 sm:flex">
//             {NAV.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToId(item.id)}
//                 className="text-sm text-black/70 transition-colors hover:text-black"
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>
//           <div className="flex items-center gap-3">
//             <Button href="#contact" variant="solid" className="hidden sm:inline-flex" onClick={() => scrollToId("contact")}>
//               Get in touch <ArrowRight className="h-4 w-4" />
//             </Button>
//             <button className="sm:hidden" aria-label="Open menu" onClick={() => scrollToId("contact")}>
//               <Mail className="h-5 w-5" />
//             </button>
//           </div>
//         </Container>
//       </header>

//       {/* Hero */}
//       <Section id="hero" className="bg-white">
//         <Container>
//           <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
//             <motion.div
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="md:col-span-7"
//             >
//               <Badge>Software Consultants</Badge>
//               <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
//                 {BRAND}: {TAGLINE}
//               </h1>
//               <p className="mt-4 max-w-2xl text-base text-black/70">
//                 {LEDE}
//               </p>
//               <div className="mt-8 flex flex-wrap items-center gap-3">
//                 <Button href="#contact" onClick={() => scrollToId("contact")}>Start a conversation</Button>
//                 <Button href="#services" variant="ghost" onClick={() => scrollToId("services")}>
//                   Explore services
//                 </Button>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.05 }}
//               className="md:col-span-5"
//             >
//               <Card className="p-8">
//                 <p className="text-sm uppercase tracking-widest text-black/50">Typical outcomes</p>
//                 <ul className="mt-4 space-y-3 text-sm">
//                   <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-black"></span> Professional software that makes your business look credible and trustworthy</li>
//                   <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-black"></span> Ownership and control of your software (no hidden fees or lock-ins)</li>
//                   <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-black"></span> Clearer roadmap, A smooth path for future upgrades</li>
//                 </ul>
//               </Card>
//             </motion.div>
//           </div>
//         </Container>
//       </Section>

//       {/* Services */}
//       <Section id="services" className="bg-neutral-50">
//         <Container>
//           <div className="mb-10 flex items-end justify-between">
//             <div>
//               <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
//               <p className="mt-2 text-sm text-black/60">Right-sized, outcome-focused engagements.</p>
//             </div>
//             <Badge>Flexible scopes</Badge>
//           </div>
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//             {SERVICES.map((s, i) => (
//               <motion.div key={s.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
//                 <Card>
//                   <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10">
//                     {s.icon}
//                   </div>
//                   <h3 className="text-lg font-semibold">{s.title}</h3>
//                   <p className="mt-2 text-sm text-black/70">{s.text}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </Container>
//       </Section>

//       {/* About */}
//       <Section id="about" className="bg-white">
//         <Container>
//           <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
//             <div className="md:col-span-7">
//               <h2 className="text-2xl font-semibold tracking-tight">{ABOUT.heading}</h2>
//               <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/70">{ABOUT.body}</p>
//               <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
//                 {ABOUT.bullets.map((b) => (
//                   <li key={b} className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-3 text-sm">
//                     <span className="inline-block h-2 w-2 rounded-full bg-black" />
//                     {b}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="md:col-span-5">
//               <Card className="p-8">
//                 <p className="text-sm uppercase tracking-widest text-black/50">Engagement models</p>
//                 <ul className="mt-4 space-y-3 text-sm">
//                   <li>• Discovery sprint (2–3 weeks)</li>
//                   <li>• Fractional leadership</li>
//                   <li>• Fixed-scope delivery</li>
//                 </ul>
//                 <div className="mt-6">
//                   <Button href="#contact" onClick={() => scrollToId("contact")} className="w-full">Request a sample plan</Button>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </Container>
//       </Section>

//       {/* Contact */}
//       <Section id="contact" className="bg-neutral-50">
//         <Container>
//           <div className="mb-10">
//             <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
//             <p className="mt-2 text-sm text-black/60">Tell us about your goals. We'll reply within 1 business day.</p>
//           </div>
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
//             <div className="md:col-span-7">
//               {/* NOTE: This form is client-side only. Replace with your backend or form provider. */}
//               <form
//                 className="space-y-4"
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   const form = e.currentTarget as HTMLFormElement;
//                   const data = new FormData(form);
//                   const subject = encodeURIComponent(`Inquiry — ${BRAND}`);
//                   const body = encodeURIComponent(
//                     `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nMessage:\n${data.get("message")}`
//                   );
//                   window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
//                 }}
//               >
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <input required name="name" placeholder="Your name" className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black" />
//                   <input name="company" placeholder="Company (optional)" className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black" />
//                 </div>
//                 <input required type="email" name="email" placeholder="Email" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black" />
//                 <textarea required name="message" placeholder="What are you trying to achieve?" rows={5} className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black" />
//                 <Button className="w-full sm:w-auto" type="submit">Send email</Button>
//               </form>
//             </div>
//             <div className="md:col-span-5">
//               <Card>
//                 <div className="flex items-center gap-3 text-sm">
//                   <Mail className="h-4 w-4" /> <a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a>
//                 </div>
//                 <div className="mt-3 flex items-center gap-3 text-sm">
//                   <Phone className="h-4 w-4" /> <span>{CONTACT.phone}</span>
//                 </div>
//                 <div className="mt-3 flex items-center gap-3 text-sm">
//                   <MapPin className="h-4 w-4" /> <span>{CONTACT.address}</span>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </Container>
//       </Section>

//       {/* Footer */}
//       <footer className="border-t border-black/10 bg-white py-10">
//         <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//           <p className="text-xs text-black/60">© {new Date().getFullYear()} {BRAND} Corp. All rights reserved.</p>
//           <div className="flex items-center gap-6 text-xs text-black/60">
//             <a href="#about" onClick={(e) => { e.preventDefault(); scrollToId("about"); }} className="hover:text-black">About</a>
//             <a href="#services" onClick={(e) => { e.preventDefault(); scrollToId("services"); }} className="hover:text-black">Services</a>
//             <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }} className="hover:text-black">Contact</a>
//           </div>
//         </Container>
//       </footer>
//     </div>
//   );
// };

// export default ConsultingLandingPage;


/////



import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Layers, LineChart, Mail, Phone, MapPin } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

// ---------------------------------------------
// Minimal, black & white consulting landing page
// Tech: TypeScript + React + TailwindCSS + Framer Motion + Lucide icons + Formspree
// Four sections: Hero, Services, About, Contact
// ---------------------------------------------

// Utility: simple container
const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

// Nav link model
type NavItem = { id: string; label: string };
const NAV: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// Smooth scroll helper
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Section wrapper
const Section: React.FC<React.PropsWithChildren<{ id: string; className?: string }>> = ({ id, className = "", children }) => (
  <section id={id} className={`scroll-mt-24 py-20 ${className}`}>{children}</section>
);

// Card
const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-black/10 bg-white p-6 shadow-sm ${className}`}>{children}</div>
);

// Button (unstyled, black & white only)
const Button: React.FC<React.PropsWithChildren<{ onClick?: () => void; href?: string; variant?: "solid" | "ghost"; className?: string; type?: "button" | "submit"; disabled?: boolean }>> = ({ onClick, href, children, variant = "solid", className = "", type = "button", disabled = false }) => {
  const base = "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-transform active:scale-[0.98]";
  const styles = variant === "ghost"
    ? "border border-black/10 bg-transparent text-black hover:bg-black hover:text-white"
    : "bg-black text-white hover:opacity-90";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={`${base} ${styles} ${disabledStyles} ${className}`}>
      {children}
    </button>
  );
};

// Badge
const Badge: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <span className={`inline-block rounded-full border border-black/10 bg-white px-3 py-1 text-xs uppercase tracking-wide text-black/60 ${className}`}>
    {children}
  </span>
);

// Contact info type
const CONTACT = {
  email: "info@abwells.ca",
  phone: "+1 (289) 200-8428",
  address: "Toronto, ON",
} as const;

// Contact Section Component with Formspree integration
const ContactSection: React.FC<{ brand: string; contact: typeof CONTACT }> = ({ brand, contact }) => {
  const [state, handleSubmit] = useForm("mnngvegy");

  return (
    <Section id="contact" className="bg-neutral-50">
      <Container>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-sm text-black/60">Tell us about your goals. We'll reply within 1 business day.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            {state.succeeded ? (
              <Card className="p-8 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Thanks for reaching out!</h3>
                <p className="mt-2 text-sm text-black/60">We'll get back to you within 1 business day.</p>
              </Card>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      required
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div>
                    <input
                      id="company"
                      name="company"
                      placeholder="Company (optional)"
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                    />
                    <ValidationError prefix="Company" field="company" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <textarea
                    required
                    id="message"
                    name="message"
                    placeholder="What are you trying to achieve?"
                    rows={5}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <Button className="w-full sm:w-auto" type="submit" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            )}
          </div>
          <div className="md:col-span-5">
            <Card>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4" /> <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4" /> <span>{contact.phone}</span>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4" /> <span>{contact.address}</span>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

// Main component (default export)
const ConsultingLandingPage: React.FC = () => {
  // EDITABLE: Basic site info (brand, tagline, description)
  const BRAND = "Ashbourne & Wells"; // e.g., "Ashbourne & Wells"
  const TAGLINE = "Clarity. Execution. Results.";
  const LEDE = "We help businesses look sharp and scale with confidence—without adding chaos.";

  // EDITABLE: Services
  const SERVICES = [
    {
      icon: <Briefcase className="h-6 w-6" aria-hidden />,
      title: "Strategy & Roadmapping",
      text: "Prioritized, outcome-driven plans that align stakeholders and unlock momentum.",
    },
    {
      icon: <Layers className="h-6 w-6" aria-hidden />,
      title: "Delivery & QA Systems",
      text: "Lightweight processes, CI/CD, and test harnesses that raise quality and speed.",
    },
    {
      icon: <LineChart className="h-6 w-6" aria-hidden />,
      title: "Analytics & Optimization",
      text: "Instrumentation and feedback loops to measure what matters and iterate smarter.",
    },
  ];

  // EDITABLE: About
  const ABOUT = {
    heading: "Pragmatic partners, not slide-makers",
    body: `We're builders at heart. We partner with founders and product teams to solve real problems, ship real features, and
    leave you with durable systems—not dependency. Our approach is transparent, test-driven, and tailored to your constraints.`,
    bullets: [
      "Senior hands-on expertise",
      "Clear comms, weekly outcomes",
      "Right-sized process, zero theatre",
    ],
  } as const;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight">{BRAND}</a>
          <nav className="hidden gap-6 sm:flex">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="text-sm text-black/70 transition-colors hover:text-black"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button href="#contact" variant="solid" className="hidden sm:inline-flex" onClick={() => scrollToId("contact")}>
              Get in touch <ArrowRight className="h-4 w-4" />
            </Button>
            <button className="sm:hidden" aria-label="Open menu" onClick={() => scrollToId("contact")}>
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <Section id="hero" className="bg-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7"
            >
              <Badge>Software Consultants</Badge>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                {BRAND}: {TAGLINE}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-black/70">
                {LEDE}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="#contact" onClick={() => scrollToId("contact")}>Start a conversation</Button>
                <Button href="#services" variant="ghost" onClick={() => scrollToId("services")}>
                  Explore services
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="md:col-span-5"
            >
              <Card className="p-8">
                <p className="text-sm uppercase tracking-widest text-black/50">Typical outcomes</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-black"></span> Professional software that makes your business look credible and trustworthy</li>
                  <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-black"></span> Ownership and control of your software (no hidden fees or lock-ins)</li>
                  <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-black"></span> Clearer roadmap, A smooth path for future upgrades</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-neutral-50">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
              <p className="mt-2 text-sm text-black/60">Right-sized, outcome-focused engagements.</p>
            </div>
            <Badge>Flexible scopes</Badge>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Card>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-black/70">{s.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section id="about" className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight">{ABOUT.heading}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/70">{ABOUT.body}</p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ABOUT.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-3 text-sm">
                    <span className="inline-block h-2 w-2 rounded-full bg-black" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5">
              <Card className="p-8">
                <p className="text-sm uppercase tracking-widest text-black/50">Engagement models</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>• Discovery sprint (2–3 weeks)</li>
                  <li>• Fractional leadership</li>
                  <li>• Fixed-scope delivery</li>
                </ul>
                <div className="mt-6">
                  <Button href="#contact" onClick={() => scrollToId("contact")} className="w-full">Request a sample plan</Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <ContactSection brand={BRAND} contact={CONTACT} />

      {/* Footer */}
      <footer className="border-t border-black/10 bg-white py-10">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-black/60">© {new Date().getFullYear()} {BRAND} Corp. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-black/60">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToId("about"); }} className="hover:text-black">About</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToId("services"); }} className="hover:text-black">Services</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }} className="hover:text-black">Contact</a>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default ConsultingLandingPage;