import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkout } from "@/utils/api";
import WorkoutActions from "@/components/WorkoutActions";

export default async function WorkoutDetails({ params }) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-5 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-block mb-8 text-gray-400 hover:text-[#CCFF00]"
        >
          ← Back to Library
        </Link>

        {/* Workout Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Image */}
          <div>
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </div>

          {/* Information */}
          <div>

            {/* Difficulty */}
            <p className="text-[#CCFF00] uppercase text-sm font-semibold mb-3">
              {workout.difficulty}
            </p>

            {/* Workout Name */}
            <h1 className="text-4xl md:text-5xl font-bold uppercase mb-5">
              {workout.name}
            </h1>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-3 mt-5">
              {workout.muscleGroups?.map((item) => (
                <span
                  key={item}
                  className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-7 mt-6">
              {workout.description}
            </p>

            {/* Workout Specs */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              {/* Duration */}
              <div className="bg-zinc-900 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">
                  Duration
                </p>

                <p className="text-xl font-semibold mt-1">
                  {workout.duration} min
                </p>
              </div>

              {/* Calories */}
              <div className="bg-zinc-900 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">
                  Calories
                </p>

                <p className="text-xl font-semibold mt-1">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              {/* Sets */}
              <div className="bg-zinc-900 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">
                  Sets
                </p>

                <p className="text-xl font-semibold mt-1">
                  {workout.sets}
                </p>
              </div>

              {/* Reps */}
              <div className="bg-zinc-900 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">
                  Reps
                </p>

                <p className="text-xl font-semibold mt-1">
                  {workout.reps}
                </p>
              </div>

            </div>

            {/* Equipment */}
            <div className="mt-6">
              <p className="text-gray-500 text-sm">
                Equipment
              </p>

              <p className="text-lg mt-1">
                {workout.equipment}
              </p>
            </div>

            {/* Rating */}
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Rating
              </p>

              <p className="text-lg mt-1">
                ⭐ {workout.rating}
              </p>
            </div>

            {/* Functional Buttons */}
            <WorkoutActions workout={workout} />

          </div>
        </div>

        {/* Instructions */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold uppercase mb-6">
            Instructions
          </h2>

          <div className="space-y-4">
            {workout.instructions?.map((instruction, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-5 rounded-xl flex gap-4"
              >
                <span className="text-[#CCFF00] font-bold">
                  {index + 1}
                </span>

                <p className="text-gray-300">
                  {instruction}
                </p>
              </div>
            ))}
          </div>

        </section>

      </div>
    </main>
  );
}