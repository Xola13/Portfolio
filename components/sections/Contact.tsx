"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Calendar, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioData } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
      reset();
      toast.success("Message sent! I'll get back to you within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try emailing me directly.");
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: portfolioData.email, href: `mailto:${portfolioData.email}` },
    { icon: Phone, label: "Phone", value: portfolioData.phone, href: `tel:${portfolioData.phone}` },
    { icon: MapPin, label: "Location", value: portfolioData.location },
    { icon: Calendar, label: "Timezone", value: portfolioData.timezone },
  ];

  return (
    <section id="contact" className="section-padding bg-[var(--muted)]/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Contact"
          title="Let's work"
          highlight="together"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-600/20 border border-primary-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-[var(--foreground)] hover:text-primary-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-[var(--foreground)]">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div className="glass-card p-6 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-400">Available for Work</span>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Open to new opportunities in RPA development, software development, and
                web development — full-time, internship, or remote roles.
              </p>
            </div>

            {/* Calendly CTA */}
            <a
              href="https://calendly.com/xolamagatya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl glass border border-white/10 text-sm font-medium text-[var(--foreground)] hover:border-primary-500/30 hover:bg-white/5 transition-all"
            >
              <Calendar className="w-4 h-4 text-primary-400" />
              Schedule a 30-min intro call on Calendly
            </a>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 text-center h-full flex flex-col items-center justify-center gap-4"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                <h3 className="font-heading text-2xl font-bold text-[var(--foreground)]">Message Sent!</h3>
                <p className="text-[var(--muted-foreground)]">
                  Thanks for reaching out. I typically respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl glass border border-white/10 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wide block mb-1.5">
                      Name *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] text-sm placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-primary-500/50 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wide block mb-1.5">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] text-sm placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-primary-500/50 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wide block mb-1.5">
                    Subject *
                  </label>
                  <input
                    {...register("subject")}
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] text-sm placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-primary-500/50 transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wide block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] text-sm placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-primary-500/50 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 shadow-glow"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
