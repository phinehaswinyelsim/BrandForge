"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main id="main" className="not-found error-page" role="alert"><p className="eyebrow">A temporary delay</p><h1>Let’s get<br /><em>moving again.</em></h1><p>Something interrupted this page. No shipment data has been created.</p><button className="button button-amber" onClick={reset}>Try again <span aria-hidden="true">↻︎</span></button></main>;
}
