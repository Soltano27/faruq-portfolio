"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";
import { Clock } from "./Icons";

export default function ContactForm() {
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setError("Fill in your name, email address and message to send.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
      <label>Message<textarea name="message" required /></label>
      {error && <p className="error" role="alert">{error}</p>}
      <button type="submit" className="send-btn">Send Message</button>
      <p className="note"><Clock /> This opens your email app with the message filled in.</p>
    </form>
  );
}
