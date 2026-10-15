"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setMessage("This is a preview. Your email has not been collected or saved.");
    form.reset();
  }

  return (
    <div className="newsletter-wrap">
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="newsletter-email">Your email address</label>
        <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required />
        <button type="submit">Join the list <span aria-hidden="true">↗︎</span></button>
      </form>
      <p className="newsletter-note" aria-live="polite">{message || "Preview only. No signup data is collected."}</p>
    </div>
  );
}
