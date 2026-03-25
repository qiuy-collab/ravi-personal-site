import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>The page moved, expired, or never existed.</p>
      <p>
        Return to Ravi&apos;s homepage to explore product strategy, AI workflow guidance, and remote execution support.
      </p>
      <Link href="/">Back to home</Link>
    </div>
  );
}
