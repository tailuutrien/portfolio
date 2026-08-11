import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageTransition from "@/components/PageTransition";
import ContactInfo from "@/components/ContactInfo";

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
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must contain at least 20 characters.";
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
      <div>

        <section className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <ContactInfo />


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
                      ? "resize-none whitespace-pre-wrap break-words border-destructive focus-visible:ring-destructive"
                      : "resize-none whitespace-pre-wrap break-words"
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
    </PageTransition>
  );
}