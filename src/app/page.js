import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import { getWorkouts } from "@/utils/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <Hero />

      <section
        id="library"
        className="max-w-7xl mx-auto px-5 py-16"
      >
        <h2 className="text-4xl font-bold uppercase">
          The Library
        </h2>

        <p className="text-gray-400 mt-2">
          Twelve lifts covering every major muscle group.
        </p>

        <WorkoutLibrary workouts={workouts} />
      </section>

      <Footer />
    </main>
  );
}