import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/PageTransition";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Xóa error của field khi user bắt đầu sửa
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Ẩn success message nếu user nhập form mới
    if (isSuccess) {
      setIsSuccess(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Fake API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Submitted contact form:", formData);

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData(initialForm);
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">

          <section className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold">Get in touch</h2>

              <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                I&apos;m currently open to internship opportunities and
                would be happy to discuss projects, collaborations, or other
                opportunities.
              </p>

              <div className="mt-8 space-y-4">
                {/* Email */}
                <a
                  href="mailto:your.email@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>

                    <p className="font-medium transition-colors group-hover:text-primary">
                      tai.luutrien@gmail.com
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/tailuutrien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FaGithub className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>

                    <p className="font-medium transition-colors group-hover:text-primary">
                      github.com/tailuutrien
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FaLinkedin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>

                    <p className="font-medium transition-colors group-hover:text-primary">
                      linkedin.com/in/your-username
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <form onSubmit={handleSubmit} noValidate>
                {/* Name + Email */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>

                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      aria-invalid={Boolean(errors.name)}
                      className={
                        errors.name
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }
                    />

                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      aria-invalid={Boolean(errors.email)}
                      className={
                        errors.email
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }
                    />

                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-6 space-y-2">
                  <Label htmlFor="subject">Subject</Label>

                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.subject)}
                    className={
                      errors.subject
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }
                  />

                  {errors.subject && (
                    <p className="text-sm text-destructive">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="message">Message</Label>

                    <span className="text-xs text-muted-foreground">
                      {formData.message.length}/500
                    </span>
                  </div>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    maxLength={500}
                    rows={6}
                    aria-invalid={Boolean(errors.message)}
                    className={
                      errors.message
                        ? "resize-none border-destructive focus-visible:ring-destructive"
                        : "resize-none"
                    }
                  />

                  {errors.message && (
                    <p className="text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Success state */}
                {isSuccess && (
                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-700 dark:text-green-400">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="mt-1 opacity-80">
                        Thank you for reaching out. I&apos;ll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="mt-6 w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}