import Link from "next/link";

export default function WorkoutCard({ workout }) {
  const categories = Array.isArray(workout.muscleGroups)
    ? workout.muscleGroups
    : [];

  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 duration-300">
        <img
          src={workout.image}
          alt={workout.name}
          className="w-full h-52 object-cover"
        />

        <div className="p-5">
          {/* Categories */}
          <div className="flex gap-2 flex-wrap mb-3">
            {categories.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="bg-zinc-800 px-3 py-1 rounded-full text-xs"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-xl font-bold uppercase">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="text-gray-400 mt-2">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="flex justify-between mt-5 text-sm text-gray-300">
            <span>⏱ {workout.duration} min</span>

            <span>🔥 {workout.caloriesBurned} kcal</span>

            <span>⭐ {workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}