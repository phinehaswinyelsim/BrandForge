"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/home";

const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!endpoint) {
      const subject = encodeURIComponent(`Project enquiry from ${String(data.name)}`);
      const body = encodeURIComponent(`Name: ${String(data.name)}\nEmail: ${String(data.email)}\n\nA little about the project:\n${String(data.brief)}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setMessage(homeContent.contact.form.mailDraft);
      return;
    }
    setSending(true);
    setMessage("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("The contact service returned an error.");
      form.reset();
      setMessage(homeContent.contact.form.submitted);
    } catch {
      setMessage(homeContent.contact.form.failed);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>{homeContent.contact.form.name}<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>{homeContent.contact.form.email}<input name="email" type="email" autoComplete="email" required maxLength={180} /></label>
      <label>{homeContent.contact.form.brief}<textarea name="brief" required minLength={12} maxLength={3000} rows={4} /></label>
      <button className="button button-bright" type="submit" disabled={sending}>{sending ? homeContent.contact.form.sending : homeContent.contact.form.action}<span aria-hidden="true">↗</span></button>
      <p className="form-status" aria-live="polite">{message}</p>
    </form>
  );
}
