import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, ArrowUpRight, MessageCircle } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Me",
    value: "rastogipari225@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rastogipari225@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lucknow, Uttar Pradesh, India",
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status) {
      setStatus("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSending) return;

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name.trim(),
          from_email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("Message sent successfully! Thank you for contacting me.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Message could not be sent. Please try again later.");
    } finally {
      setIsSending(false);
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-violet-400/60 focus:bg-violet-500/[0.04]";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080611] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-600/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Work <span className="text-violet-400">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have an opportunity, a project idea, or just want to connect? I'd
            love to hear from you. Let's build something meaningful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <MessageCircle size={27} />
              </div>

              <h3 className="text-2xl font-bold">Let's start a conversation</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                I'm interested in software development opportunities,
                collaborative projects, and connecting with fellow developers.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:border-violet-400/30 hover:bg-violet-500/[0.04]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">{detail.title}</p>

                      <p className="mt-1 break-all text-sm font-medium text-gray-200">
                        {detail.value}
                      </p>
                    </div>

                    {detail.href && (
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-gray-500"
                      />
                    )}
                  </div>
                );

                return detail.href ? (
                  <a key={detail.title} href={detail.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={detail.title}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Connect with me
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/PariRastogi18"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
                >
                  <i class="fa-brands fa-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/pari-rastogi-907336309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-8"
            >
              <div className="mb-7">
                <h3 className="text-xl font-bold">Send me a message</h3>

                <p className="mt-2 text-sm text-gray-400">
                  Fill out the form below to get in touch.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    maxLength={100}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  maxLength={150}
                  required
                  className={inputClasses}
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea or opportunity..."
                  rows={5}
                  maxLength={5000}
                  required
                  className={`${inputClasses} resize-y`}
                />
              </div>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 text-sm ${
                    status.startsWith("Please")
                      ? "text-red-400"
                      : "text-violet-300"
                  }`}
                >
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSending ? "Sending..." : "Send Message"}
                {!isSending && <Send size={17} />}
              </button>

              <p className="mt-4 text-xs leading-5 text-gray-500">
                Submitting this form opens your default email application. Your
                message will not be sent automatically.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
