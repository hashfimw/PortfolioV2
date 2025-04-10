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
  ChevronDown,
  ChevronUp,
  Edit3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormState({
      ...formState,
      subject: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (data.success) {
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
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 pb-10 rounded-xl bg-spotify-dark p-4 overflow-x-hidden">
      {/* Header */}
      <div className="relative pt-10 md:pt-16 pb-12 p-2">
        <div className="absolute inset-0 bg-gradient-to-b from-spotify-purple/70 to-transparent opacity-30 rounded-xl"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-200">
            Contact Me
          </h1>
          <p className="text-neutral-300 text-lg max-w-3xl">
            Get in touch for collaborations, questions, or just to say hello.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-spotify-dark-elevated border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold flex items-center text-neutral-200">
                <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
                Let&apos;s Connect
              </CardTitle>
              <CardDescription className="text-neutral-300">
                Feel free to reach out through any of the channels below.
                I&apos;m always open to discussing new projects, opportunities,
                or partnerships.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="flex items-start">
                <div className="p-2 bg-spotify-dark rounded-full mr-3">
                  <Mail className="h-5 w-5 text-spotify-green" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-200">Email</h3>
                  <a
                    href="mailto:hashfimawarid@gmail.com"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
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
                  <h3 className="font-medium text-neutral-200">Location</h3>
                  <p className="text-sm text-neutral-300">Bandung, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-spotify-dark rounded-full mr-3">
                  <Phone className="h-5 w-5 text-spotify-green" />
                </div>
                <div>
                  <Link href="https://wa.me/6285172275576">
                    <h3 className="font-medium text-neutral-200">Phone</h3>
                    <p className="text-sm text-neutral-300">
                      Available upon request
                    </p>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-spotify-dark-elevated border-none">
            <CardHeader className="pb-2">
              <CardTitle className="font-medium text-neutral-200 pb-2">
                Connect With Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/hashfimw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-spotify-dark  hover:bg-spotify-dark-highlight rounded-lg transition-colors"
                >
                  <Github className="h-8 w-8 mb-2 text-spotify-light-gray" />
                  <span className="text-sm text-neutral-200">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/hashfimawarid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-spotify-dark hover:bg-spotify-dark-highlight rounded-lg transition-colors"
                >
                  <Linkedin className="h-8 w-8 mb-2 text-spotify-light-gray" />
                  <span className="text-sm text-neutral-200">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <div className="bg-gradient-to-r from-spotify-purple/20 to-spotify-purple/20 p-6 rounded-lg">
            <h2 className="font-medium mb-2 text-neutral-200">
              Current Availability
            </h2>
            <p className="text-sm text-neutral-300">
              I&apos;m currently accepting new projects and opportunities. My
              typical response time is within 24 hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <Card className="bg-spotify-dark-elevated border-none">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center text-neutral-200">
                <span className="w-3 h-3 bg-spotify-green rounded-full mr-2"></span>
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitStatus?.success ? (
                <Alert className="mb-6 bg-green-900/30 border-green-800 text-green-300">
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{submitStatus.message}</AlertDescription>
                </Alert>
              ) : submitStatus?.success === false ? (
                <Alert className="mb-6 bg-red-900/30 border-red-800 text-red-300">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{submitStatus.message}</AlertDescription>
                </Alert>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium block text-neutral-200"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      className="bg-spotify-dark border-neutral-700 focus:border-spotify-green focus:ring-spotify-green text-neutral-200"
                      style={{ backgroundColor: "var(--spotify-dark)" }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium block text-neutral-200"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      className="bg-spotify-dark border-neutral-700 focus:border-spotify-green focus:ring-spotify-green text-neutral-200"
                      style={{ backgroundColor: "var(--spotify-dark)" }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium block text-neutral-200"
                  >
                    Subject
                  </label>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="border border-neutral-700 focus:border-spotify-green p-2 rounded-md w-full text-left text-neutral-200 flex items-center justify-between hover:bg-spotify-dark-highlight transition-all duration-200 ease-in-out"
                    >
                      <div className="flex items-center">
                        <Edit3 className="h-4 w-4 mr-2 text-spotify-green" />
                        <span>{formState.subject || "Please select"}</span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 text-spotify-green" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-spotify-green" />
                      )}
                    </button>

                    {isOpen && (
                      <div
                        className="absolute top-full left-0 w-full mt-1 bg-spotify-dark border border-neutral-700 rounded-md z-10 text-neutral-300 shadow-lg transform origin-top transition-all duration-200 ease-in-out"
                        style={{
                          animation: "dropdown-appear 0.2s ease-out forwards",
                        }}
                      >
                        <style jsx>{`
                          @keyframes dropdown-appear {
                            from {
                              opacity: 0;
                              transform: translateY(-10px);
                            }
                            to {
                              opacity: 1;
                              transform: translateY(0);
                            }
                          }
                        `}</style>
                        {[
                          "Job Opportunity",
                          "Project Inquiry",
                          "Collaboration",
                          "General Question",
                          "Other",
                        ].map((option) => (
                          <div
                            key={option}
                            className="p-3 hover:bg-spotify-dark-highlight hover:text-spotify-green cursor-pointer transition-colors duration-150 flex items-center"
                            onClick={() => {
                              handleSelectChange(option);
                              setIsOpen(false);
                            }}
                          >
                            <span className="w-1 h-5 bg-transparent rounded-full mr-2 group-hover:bg-spotify-green transition-all duration-150"></span>
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium block text-neutral-200"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-spotify-dark border-neutral-700 focus:border-spotify-green focus:ring-spotify-green resize-none text-neutral-200"
                    style={{ backgroundColor: "var(--spotify-dark)" }}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-spotify-green hover:bg-spotify-green-bright text-black font-medium rounded-full"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-spotify-dark-elevated border-none">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-neutral-200">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              question: "What types of projects do you work on?",
              answer:
                "I work on Front-End, Back-End, and Full-Stack applications. From simple websites to complex web apps, including e-commerce platforms, content management systems, dashboards, and more.",
            },
            {
              question: "What is your typical timeline for projects?",
              answer:
                "Timelines depend on the scope and complexity of the project. A simple website might take 1–3 weeks, while a complex web application could take 1–3 months. I'll provide a detailed estimate during our initial consultation.",
            },
            {
              question: "How do you handle project pricing?",
              answer:
                "I offer pricing based on mutual agreement and negotiation at the beginning, depending on the type and scope of the work required.",
            },
            {
              question: "Do you offer maintenance after project completion?",
              answer:
                "Yes, I offer maintenance packages for all completed projects. This includes updates, bug fixes, security patches, and small feature additions.",
            },
          ].map((faq, index) => (
            <div key={index} className="p-4 bg-spotify-dark rounded-lg">
              <h3 className="font-medium mb-2 text-neutral-200">
                {faq.question}
              </h3>
              <p className="text-sm text-neutral-300">{faq.answer}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
