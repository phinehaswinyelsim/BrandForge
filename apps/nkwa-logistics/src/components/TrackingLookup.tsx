"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { sampleTracking } from "@/content/tracking";

export function TrackingLookup() {
  const [trackingId, setTrackingId] = useState<string>(sampleTracking.id);
  const [submittedId, setSubmittedId] = useState<string>(sampleTracking.id);
  const isSample = submittedId === sampleTracking.id;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedId(trackingId.trim().toUpperCase());
  }

  return (
    <div className="tracking-card">
      <div className="tracking-topline"><span className="tracking-live-dot" /> DEMO TRACKING <span className="tracking-demo-label">MOCK DATA</span></div>
      <form className="tracking-form" onSubmit={handleSubmit}>
        <label htmlFor="tracking-id">Tracking ID</label>
        <div className="tracking-input-row"><input id="tracking-id" name="trackingId" value={trackingId} onChange={(event) => setTrackingId(event.target.value)} placeholder="Try NK-1042" required /><button className="button button-amber" type="submit">Track parcel <span aria-hidden="true">↗︎</span></button></div>
      </form>
      {isSample ? <div className="tracking-result" aria-live="polite">
        <div className="tracking-result-heading"><div><span className="eyebrow">{sampleTracking.id} / {sampleTracking.route}</span><h3>{sampleTracking.status}</h3></div><span className="tracking-status-pill">IN TRANSIT</span></div>
        <ol className="tracking-timeline">{sampleTracking.steps.map((step, index) => <li className={step.complete ? "is-complete" : index === 3 ? "is-current" : ""} key={step.title}><span className="timeline-marker" /><div><strong>{step.title}</strong><span>{step.place}</span></div><time>{step.time}</time></li>)}</ol>
        <p className="tracking-disclaimer">Example status only. No live parcel data or dispatch system is connected.</p>
      </div> : <p className="tracking-empty" role="status">No sample record found for <strong>{submittedId || "that ID"}</strong>. Try NK-1042 to preview the demo timeline.</p>}
    </div>
  );
}
