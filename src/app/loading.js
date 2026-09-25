export default function Loading() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-zinc-700 border-t-lime-400 rounded-full animate-spin mx-auto"></div>

        <p className="text-gray-400 mt-4">
          Loading workouts…
        </p>
      </div>
    </main>
  );
}