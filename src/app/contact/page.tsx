"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Send,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, you would send the form data to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        success: true,
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      });

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div className="relative pt-10 md:pt-16 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-spotify-blue/20 to-transparent opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-neutral-400 text-lg max-w-3xl">
            Get in touch for collaborations, questions, or just to say hello.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-spotify-dark-elevated p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
              Let's Connect
            </h2>

            <p className="text-neutral-300 mb-6">
              Feel free to reach out through any of the channels below. I'm
              always open to discussing new projects, opportunities, or
              partnerships.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-spotify-dark rounded-full mr-3">
                  <Mail className="h-5 w-5 text-spotify-green" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:hello@yourname.com"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    hashfimawarid@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-spotify-dark rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-spotify-green" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-neutral-400">Bandung, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-spotify-dark rounded-full mr-3">
                  <Phone className="h-5 w-5 text-spotify-green" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-neutral-400">
                    Available upon request
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-spotify-dark-elevated p-6 rounded-lg">
            <h2 className="font-medium mb-4">Connect With Me</h2>

            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/hashfimw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-spotify-dark hover:bg-spotify-dark-highlight rounded-lg transition-colors"
              >
                <Github className="h-8 w-8 mb-2" />
                <span className="text-sm">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-spotify-dark hover:bg-spotify-dark-highlight rounded-lg transition-colors"
              >
                <Linkedin className="h-8 w-8 mb-2" />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-spotify-dark hover:bg-spotify-dark-highlight rounded-lg transition-colors"
              >
                <Twitter className="h-8 w-8 mb-2" />
                <span className="text-sm">Twitter</span>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-r from-spotify-green/20 to-spotify-green/5 p-6 rounded-lg">
            <h2 className="font-medium mb-2">Current Availability</h2>
            <p className="text-sm text-neutral-300">
              I'm currently accepting new projects and opportunities. My typical
              response time is within 24 hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="bg-spotify-dark-elevated p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
              Send Me a Message
            </h2>

            {submitStatus?.success ? (
              <div className="bg-green-900/30 border border-green-800 text-green-300 p-4 rounded-lg mb-6">
                <p>{submitStatus.message}</p>
              </div>
            ) : submitStatus?.success === false ? (
              <div className="bg-red-900/30 border border-red-800 text-red-300 p-4 rounded-lg mb-6">
                <p>{submitStatus.message}</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-spotify-dark rounded-md border border-neutral-700 focus:border-spotify-green focus:outline-none focus:ring-1 focus:ring-spotify-green transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-spotify-dark rounded-md border border-neutral-700 focus:border-spotify-green focus:outline-none focus:ring-1 focus:ring-spotify-green transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-medium block mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-spotify-dark rounded-md border border-neutral-700 focus:border-spotify-green focus:outline-none focus:ring-1 focus:ring-spotify-green transition-colors"
                >
                  <option value="">Please select</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="General Question">General Question</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-spotify-dark rounded-md border border-neutral-700 focus:border-spotify-green focus:outline-none focus:ring-1 focus:ring-spotify-green transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-spotify-green hover:bg-spotify-green-bright text-black font-medium rounded-full transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-spotify-dark-elevated p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {[
            {
              question: "What types of projects do you work on?",
              answer:
                "I specialize in full-stack web applications, from simple websites to complex web apps. I have experience with e-commerce, content management systems, dashboards, and more.",
            },
            {
              question: "What is your typical timeline for projects?",
              answer:
                "Timelines vary depending on the scope and complexity of the project. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
            },
            {
              question: "How do you handle project pricing?",
              answer:
                "I offer both hourly and project-based pricing depending on the nature of the work. For most projects, I prefer to provide a fixed price quote after understanding the requirements and scope.",
            },
            {
              question: "Do you offer maintenance after project completion?",
              answer:
                "Yes, I offer maintenance packages for all completed projects. This can include updates, bug fixes, security patches, and small feature additions.",
            },
          ].map((faq, index) => (
            <div key={index} className="p-4 bg-spotify-dark rounded-lg">
              <h3 className="font-medium mb-2">{faq.question}</h3>
              <p className="text-sm text-neutral-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
