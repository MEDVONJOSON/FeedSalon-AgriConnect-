/**
 * Home Page
 *
 * Landing page / entry point.
 */

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f5f5]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1f2937]">EK-SMS</h1>
        <p className="mt-4 text-lg text-[#4b5563]">EL-KENDEH Smart School Management System</p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Link
            href="/register"
            className="rounded-lg bg-[#1a365d] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#1e4976] hover:shadow-xl"
          >
            Register Your School
          </Link>

          <div className="mt-2 flex gap-4">
            <Link
              href="/login"
              className="rounded-lg bg-[#1a365d] px-6 py-3.5 text-white transition-colors hover:bg-[#1e4976]"
            >
              Login
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-[#e5e7eb] bg-white px-6 py-3.5 text-[#4b5563] transition-colors hover:bg-[#f5f5f5]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
