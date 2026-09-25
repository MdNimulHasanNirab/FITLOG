"use client";

import { useState } from "react";
import WorkoutCard from "@/components/WorkoutCard";

export default function WorkoutLibrary({ workouts }) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <>
      {/* Sort */}
      <div className="flex justify-end mt-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-full outline-none"
        >
          <option value="duration">Sort By: Duration</option>
          <option value="calories">Sort By: Calories</option>
          <option value="rating">Sort By: Rating</option>
        </select>
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </>
  );
}