"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${name || "Website visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
  )}`;

  return (
    <form
      action={formspreeEndpoint || undefined}
      className="space-y-4"
      method={formspreeEndpoint ? "POST" : undefined}
    >
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" onChange={(event) => setName(event.target.value)} required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          required
          type="email"
        />
      </div>
      <div>
        <Label htmlFor="message">Project Details</Label>
        <Textarea
          id="message"
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      {formspreeEndpoint ? (
        <Button type="submit">Send Inquiry</Button>
      ) : (
        <a href={mailtoHref}>
          <Button type="button">Send via Email App</Button>
        </a>
      )}
      <p className="text-sm text-white/46">
        {formspreeEndpoint
          ? "The form posts to your external endpoint so GitHub Pages stays static."
          : "No backend is required. This opens the visitor's email app with the message prefilled."}
      </p>
    </form>
  );
}
