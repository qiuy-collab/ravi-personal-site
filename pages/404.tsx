import Head from "next/head";
import Link from "next/link";

export default function LegacyNotFoundPage() {
  return (
    <>
      <Head>
        <title>404 | Ravi</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="mx-auto flex min-h-[70dvh] w-full max-w-4xl flex-col items-center justify-center px-5 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase text-slate-400">404</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">
          The page moved, expired, or never existed.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
          Return to Ravi&apos;s homepage to explore product strategy, AI workflow guidance, and remote execution
          support.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-accent px-6 py-3 text-base font-medium text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
        >
          Back to home
        </Link>
      </div>
    </>
  );
}
