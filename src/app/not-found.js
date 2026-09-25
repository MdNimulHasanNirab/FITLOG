"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-extrabold text-lime-400 mb-4">404</h1>
      
      <h2 className="text-2xl font-bold uppercase mb-2">
        Page Not Found
      </h2>
      
      <p className="text-gray-400 max-w-md mb-8">
        Looks like you wandered off the workout path. Let&apos;s get you back on track!
      </p>

      <Link
        href="/"
        className="bg-lime-400 text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-500 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}