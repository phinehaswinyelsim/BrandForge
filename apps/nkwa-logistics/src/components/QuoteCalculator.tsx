"use client";

import { useMemo, useState } from "react";
import { currency, estimateQuote, towns, type Town } from "@/content/routes";
import { whatsappHref } from "@/lib/whatsapp";

export function QuoteCalculator() {
  const [origin, setOrigin] = useState<Town>("Tarkwa");
  const [destination, setDestination] = useState<Town>("Accra");
  const [weight, setWeight] = useState("2");
  const weightKg = Number(weight);
  const estimate = useMemo(() => estimateQuote(origin, destination, weightKg), [origin, destination, weightKg]);
  const isCustomFreight = !Number.isFinite(weightKg) || weightKg > 50 || weightKg < 0.5;
  const message = "Hello Nkwa Logistics. Please confirm a quote from " + origin + " to " + destination + " for a " + weight + " kg shipment.";

  return (
    <div className="quote-layout">
      <form className="quote-form" onSubmit={(event) => event.preventDefault()}>
        <div className="quote-fields">
          <label>From<select value={origin} onChange={(event) => setOrigin(event.target.value as Town)}>{towns.map((town) => <option key={town} value={town}>{town}</option>)}</select></label>
          <span className="route-arrow" aria-hidden="true">→︎</span>
          <label>To<select value={destination} onChange={(event) => setDestination(event.target.value as Town)}>{towns.map((town) => <option key={town} value={town}>{town}</option>)}</select></label>
          <label className="weight-field">Parcel weight<input type="number" min="0.5" max="500" step="0.5" value={weight} onChange={(event) => setWeight(event.target.value)} inputMode="decimal" /><span>kg</span></label>
        </div>
        <p className="form-helper">Use a sample route and weight to see how a planning estimate could work.</p>
        <div className="quote-estimate" aria-live="polite">
          {isCustomFreight ? <><span className="quote-label">Custom freight</span><strong>Let’s plan the load.</strong><p>Loads over 50 kg need a direct freight enquiry.</p><a className="button button-light" href={whatsappHref(message)}>Request a freight quote <span aria-hidden="true">↗︎</span></a></> : <><span className="quote-label">Illustrative estimate</span><strong>{currency(estimate.total)}</strong><p>{estimate.distanceKm} km sample route · {estimate.tier} · rates are placeholders.</p><a className="button button-light" href={whatsappHref(message)}>Ask for a confirmed quote <span aria-hidden="true">↗︎</span></a></>}
        </div>
      </form>
      <aside className="quote-explainer"><span className="quote-index">01 / PLAN A MOVE</span><h3>Clear from<br />the first step.</h3><p>Choose two towns and a parcel weight. The example uses a GH₵ 20 planning fee, GH₵ 0.15 per route kilometre, and a weight-tier add-on.</p><p className="concept-small">Every distance and rate is illustrative. Confirm actual routes, fees, and availability before any real use.</p><div className="quote-mark">NK / 01</div></aside>
    </div>
  );
}
