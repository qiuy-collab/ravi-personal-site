import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70dvh] w-full max-w-4xl flex-col items-center justify-center px-5 py-16 text-center sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.3em] text-accent">404</p>
      <h1 className="mt-4 text-balance text-4xl font-semibold text-text-primary sm:text-5xl">
        The page moved, expired, or never existed.
      </h1>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-text-secondary">
        Return to Ravi&apos;s homepage to explore product strategy, AI workflow guidance, and remote execution support.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-base font-medium text-white shadow-md shadow-violet-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-300/50"
      >
        Back to home
      </Link>
    </div>
  );
}
