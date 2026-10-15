"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main" className="not-found error-page" role="alert">
      <p className="eyebrow">A small pause</p><h1>Let’s try<br /><em>that again.</em></h1>
      <p>Something interrupted this page. Your visit has not been saved.</p>
      <button className="button button-primary" onClick={reset}>Try again <span aria-hidden="true">↻︎</span></button>
    </main>
  );
}
