import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vanguard Build Co" },
      {
        name: "description",
        content:
          "Get in touch with Vanguard Build Co. Phone +61 481 057 450, email info@vanguardco.com.au, or visit us at Keevil Street, Brookdale WA 6112.",
      },
      { property: "og:title", content: "Contact Vanguard Build Co" },
      {
        property: "og:description",
        content: "Start a residential construction project across Western Australia.",
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  projectType: z.string().trim().max(80).optional(),
  message: z.string().trim().min(10, "Please share a few details").max(1500),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    // Simulate request — wire to Lovable Cloud later if requested
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Thank you — we'll be in touch within one business day.");
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation."
        subtitle="Tell us about your project, your site, or simply your idea. Every enquiry is read by one of our directors."
      />

      <section className="py-20 md:py-28 container-x">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Studio details */}
          <aside className="md:col-span-4">
            <div className="eyebrow">Studio</div>
            <h2 className="mt-5 font-display text-3xl md:text-4xl leading-[1.1]">
              Vanguard Build Co
              <br />
              Pty Ltd
            </h2>

            <ul className="mt-12 space-y-8">
              <li className="flex gap-4">
                <MapPin className="text-bronze flex-shrink-0 mt-1" size={20} strokeWidth={1.4} />
                <div>
                  <div className="eyebrow text-foreground">Address</div>
                  <div className="mt-2 text-foreground/80 leading-relaxed">
                    Keevil Street
                    <br />
                    Brookdale WA 6112
                    <br />
                    Australia
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="text-bronze flex-shrink-0 mt-1" size={20} strokeWidth={1.4} />
                <div>
                  <div className="eyebrow text-foreground">Email</div>
                  <a href="mailto:info@vanguardco.com.au" className="mt-2 block link-underline">
                    info@vanguardco.com.au
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="text-bronze flex-shrink-0 mt-1" size={20} strokeWidth={1.4} />
                <div>
                  <div className="eyebrow text-foreground">Phone</div>
                  <a href="tel:+61481057450" className="mt-2 block link-underline">
                    +61 481 057 450
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-14 pt-8 border-t border-border">
              <div className="eyebrow text-foreground">Hours</div>
              <div className="mt-3 text-foreground/80 text-sm leading-relaxed">
                Monday — Friday · 8:00 to 17:00
                <br />
                Saturday by appointment
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-8">
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <Field
                  label="Project type"
                  name="projectType"
                  placeholder="Custom home, renovation…"
                />
              </div>
              <Field
                label="Tell us about your project"
                name="message"
                required
                textarea
                placeholder="Site, scope, timeline, budget — share whatever feels right."
              />

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-ink text-bone text-xs uppercase tracking-[0.2em] hover:bg-bronze transition-colors disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Enquiry"}
                  <Send size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="mt-5 text-xs text-muted-foreground">
                  We respond to every enquiry within one business day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}

function Field({ label, name, type = "text", required, textarea, placeholder }: FieldProps) {
  const baseClasses =
    "w-full bg-transparent border-b border-border focus:border-bronze outline-none py-3 text-base placeholder:text-muted-foreground/60 transition-colors";
  return (
    <label className="block">
      <span className="eyebrow text-foreground block mb-3">
        {label}
        {required && <span className="text-bronze ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          maxLength={1500}
          className={baseClasses + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          maxLength={255}
          className={baseClasses}
        />
      )}
    </label>
  );
}
