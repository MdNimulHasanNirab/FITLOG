"use client";

import Link from "next/link";

export default function PlanCard({
  workout,
  onDone,
  onRemove,
}) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-4 flex flex-col md:flex-row gap-5 items-center">
      
      {/* Image */}
      <img
        src={workout.image}
        alt={workout.name}
        className="w-32 h-32 rounded-xl object-cover"
      />

      {/* Information */}
      <div className="flex-1">
        <h3 className="text-xl font-bold uppercase">
          {workout.name}
        </h3>

        <p className="text-gray-400 mt-1">
          {workout.equipment}
        </p>

        <div className="flex gap-5 mt-3 text-sm text-gray-300 flex-wrap">
          <span>⏱ {workout.duration} min</span>

          <span>🔥 {workout.caloriesBurned} kcal</span>

          <span>⭐ {workout.rating}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-wrap">
        
        <Link
          href={`/workout/${workout.id}`}
          className="bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-semibold"
        >
          View Details
        </Link>

        <button
          onClick={() => onDone(workout)}
          className="border border-gray-500 px-4 py-2 rounded-full text-sm"
        >
          ✓ Done
        </button>

        <button
          onClick={() => onRemove(workout.id)}
          className="border border-red-500 text-red-400 px-4 py-2 rounded-full text-sm"
        >
          ✕
        </button>
      </div>
    </div>
  );
}