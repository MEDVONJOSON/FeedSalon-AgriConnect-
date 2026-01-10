/**
 * School Registration Page
 *
 * 6-step wizard for new schools to apply/register.
 */

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f5f5]">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-[#1f2937]">Register Your School</h1>
        <p className="mt-2 text-[#4b5563]">
          Welcome! This wizard will guide you through the school registration process.
        </p>

        <div className="mt-8 rounded-lg bg-[#3b82f6]/10 p-4">
          <p className="text-[#1a365d]">
            The 6-step registration wizard will guide you through:
          </p>
          <ul className="mt-2 list-inside list-disc text-[#4b5563]">
            <li>Enter school information</li>
            <li>Set up administrator account</li>
            <li>Configure school settings</li>
            <li>Add initial staff members</li>
            <li>Review and submit application</li>
            <li>Receive confirmation</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="text-[#3b82f6] hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
