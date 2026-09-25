import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-lime-400 uppercase tracking-widest text-sm">
          Workout Library
        </p>

        <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight mt-4">
          Train With Intent. Log Every Set.
        </h1>

        <p className="text-gray-400 mt-6">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>

        <Link
          href="#library"
          className="inline-block mt-8 bg-lime-400 text-black px-6 py-3 rounded-full font-bold"
        >
          Browse Workouts →
        </Link>
      </div>

      <div>
        <img
          src="/banner.png"
          alt="Gym Hero"
          className="rounded-2xl w-full"
        />
      </div>
    </section>
  );
}