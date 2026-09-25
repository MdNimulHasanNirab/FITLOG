import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="max-w-7xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <img 
            src="/logo.png" 
            alt="FitLog Logo" 
            className="h-6 w-auto object-contain" 
          />
          <h2 className="text-2xl font-bold text-lime-400">FITLOG</h2>
        </Link>

        <p className="text-gray-400 text-sm text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}