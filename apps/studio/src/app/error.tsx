"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="not-found wrap" id="main"><p className="eyebrow">A small interruption</p><h1>Let’s try<br /><span>that again.</span></h1><p>Something didn’t load the way it should. Please retry in a moment.</p><button className="button button-bright" onClick={() => reset()}>Retry <span aria-hidden="true">↻</span></button></main>;
}
