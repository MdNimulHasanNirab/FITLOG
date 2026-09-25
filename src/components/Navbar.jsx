"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getPlan, getSaved } from "@/utils/storage";

export default function Navbar() {
  const pathname = usePathname();

  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    updateCounts();

    window.addEventListener("storage", updateCounts);
    window.addEventListener("fitlog-update", updateCounts);

    return () => {
      window.removeEventListener("storage", updateCounts);
      window.removeEventListener("fitlog-update", updateCounts);
    };
  }, []);

  function updateCounts() {
    setPlanCount(getPlan().length);
    setSavedCount(getSaved().length);
  }

  const workoutActive = pathname === "/";
  const planActive = pathname === "/my-plan";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">

        {/* Logo */}
     <Link href="/" className="flex items-center gap-2.5">
          <img 
            src="/logo.png" 
            alt="FitLog Logo" 
            className="h-6 w-auto object-contain" 
          />
          <h2 className="text-2xl font-bold text-lime-400">FITLOG</h2>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <Link
            href="/"
            className={
              workoutActive
                ? "text-lime-400"
                : "hover:text-lime-400"
            }
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={
              planActive
                ? "text-lime-400"
                : "hover:text-lime-400"
            }
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex gap-3">
          <Link
            href="/my-plan"
            className="bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-semibold"
          >
            Plan {planCount}
          </Link>

          <Link
            href="/my-plan"
            className="border border-gray-500 px-4 py-2 rounded-full text-sm"
          >
            Saved {savedCount}
          </Link>
        </div>

      </div>
    </nav>
  );
}