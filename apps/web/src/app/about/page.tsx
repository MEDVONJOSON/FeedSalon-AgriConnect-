/**
 * About Page
 *
 * Information about the EK-SMS platform.
 */

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f5f5]">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-[#1f2937]">About EK-SMS</h1>
        <p className="mt-4 text-[#4b5563]">
          EL-KENDEH Smart School Management System (EK-SMS) is a comprehensive platform
          designed to streamline school administration, enhance communication, and
          improve educational outcomes.
        </p>

        <div className="mt-8 space-y-4">
          <div className="rounded-lg bg-[#f5f5f5] p-4">
            <h2 className="font-semibold text-[#1f2937]">Features</h2>
            <ul className="mt-2 list-inside list-disc text-[#4b5563]">
              <li>Student enrollment and management</li>
              <li>Staff and teacher administration</li>
              <li>Grade and attendance tracking</li>
              <li>Parent communication portal</li>
              <li>Financial management</li>
              <li>Reports and analytics</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Link
            href="/"
            className="text-[#3b82f6] hover:underline"
          >
            &larr; Back to Home
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-[#1a365d] px-4 py-2 text-white transition-colors hover:bg-[#1e4976]"
          >
            Register Your School
          </Link>
        </div>
      </div>
    </div>
  );
}
