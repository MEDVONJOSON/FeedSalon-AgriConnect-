/**
 * Login Page
 *
 * Authentication page for existing users.
 */

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f5f5]">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h1 className="text-2xl font-bold text-[#1f2937]">Login</h1>
        <p className="mt-2 text-[#4b5563]">Sign in to your account</p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1f2937]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-lg border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#3b82f6] focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#1f2937]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-lg border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#3b82f6] focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#1a365d] px-4 py-3.5 text-white transition-colors hover:bg-[#1e4976]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[#4b5563]">
          <p>
            New school?{" "}
            <Link href="/register" className="text-[#3b82f6] hover:underline">
              Register Your School
            </Link>
          </p>
        </div>

        <div className="mt-4">
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
