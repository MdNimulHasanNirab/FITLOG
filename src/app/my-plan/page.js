"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import PlanCard from "@/components/PlanCard";
import Toast from "@/components/toast";

import {
  getPlan,
  savePlan,
  getSaved,
  saveSaved,
} from "@/utils/storage";

export default function MyPlan() {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const [activeTab, setActiveTab] = useState("plan");

  const [loading, setLoading] = useState(true);

  const [sortBy, setSortBy] = useState("duration");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // Load data from localStorage
  useEffect(() => {
    const storedPlan = getPlan();
    const storedSaved = getSaved();

    setPlan(storedPlan);
    setSaved(storedSaved);

    setLoading(false);
  }, []);

  // Toast message
  function showMessage(text, type = "success") {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
    }, 3500);
  }

  // ==========================================
  // MARK AS DONE
  // Removes workout from Today's Plan
  // ==========================================

  function handleDone(workout) {
    const updatedPlan = plan.filter(
      (item) =>
        String(item.id) !== String(workout.id)
    );

    // Update React state
    setPlan(updatedPlan);

    // Update localStorage
    savePlan(updatedPlan);

    // Update navbar counter
    window.dispatchEvent(
      new Event("fitlog-update")
    );

    // Show toast
    showMessage(
      `${workout.name} completed`,
      "success"
    );
  }

  // ==========================================
  // REMOVE FROM TODAY'S PLAN
  // ==========================================

  function handleRemove(id) {
    const updatedPlan = plan.filter(
      (item) =>
        String(item.id) !== String(id)
    );

    // Update React state
    setPlan(updatedPlan);

    // Update localStorage
    savePlan(updatedPlan);

    // Update navbar counter
    window.dispatchEvent(
      new Event("fitlog-update")
    );

    // Show delete toast
    showMessage(
      "Workout removed from today's plan",
      "delete"
    );
  }

  // ==========================================
  // REMOVE FROM SAVED
  // ==========================================

  function handleRemoveSaved(id) {
    const updatedSaved = saved.filter(
      (item) =>
        String(item.id) !== String(id)
    );

    // Update React state
    setSaved(updatedSaved);

    // Update localStorage
    saveSaved(updatedSaved);

    // Update navbar counter
    window.dispatchEvent(
      new Event("fitlog-update")
    );

    // Show delete toast
    showMessage(
      "Workout removed from saved",
      "delete"
    );
  }

  // ==========================================
  // SORT
  // ==========================================

  function sortWorkouts(workouts) {
    const sorted = [...workouts];

    if (sortBy === "duration") {
      sorted.sort(
        (a, b) =>
          Number(a.duration || 0) -
          Number(b.duration || 0)
      );
    }

    if (sortBy === "calories") {
      sorted.sort(
        (a, b) =>
          Number(a.caloriesBurned || 0) -
          Number(b.caloriesBurned || 0)
      );
    }

    if (sortBy === "rating") {
      sorted.sort(
        (a, b) =>
          Number(b.rating || 0) -
          Number(a.rating || 0)
      );
    }

    return sorted;
  }

  // Sorted lists
  const sortedPlan = sortWorkouts(plan);
  const sortedSaved = sortWorkouts(saved);

  // Current tab data
  const displayedWorkouts =
    activeTab === "plan"
      ? plan
      : saved;

  // ==========================================
  // METRICS
  // ==========================================

  const totalExercises =
    displayedWorkouts.length;

  const totalMinutes =
    displayedWorkouts.reduce(
      (total, workout) =>
        total +
        Number(workout.duration || 0),
      0
    );

  const totalCalories =
    displayedWorkouts.reduce(
      (total, workout) =>
        total +
        Number(
          workout.caloriesBurned || 0
        ),
      0
    );

  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-6xl mx-auto px-5 py-16">

        {/* ================================== */}
        {/* TITLE */}
        {/* ================================== */}

        <h1 className="text-5xl font-bold uppercase">
          My Plan
        </h1>

        <p className="text-gray-400 mt-3">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* ================================== */}
        {/* METRICS */}
        {/* ================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

          {/* Exercises */}
          <div className="bg-zinc-900 p-5 rounded-xl">

            <p className="text-gray-400">
              Exercises
            </p>

            <h3 className="text-3xl font-bold mt-1">
              {totalExercises}
            </h3>

          </div>

          {/* Minutes */}
          <div className="bg-zinc-900 p-5 rounded-xl">

            <p className="text-gray-400">
              Minutes
            </p>

            <h3 className="text-3xl font-bold mt-1">
              {totalMinutes}
            </h3>

          </div>

          {/* Calories */}
          <div className="bg-zinc-900 p-5 rounded-xl">

            <p className="text-gray-400">
              Calories
            </p>

            <h3 className="text-3xl font-bold mt-1">
              {totalCalories}
            </h3>

          </div>

        </div>

        {/* ================================== */}
        {/* TABS */}
        {/* ================================== */}

        <div className="flex gap-4 mt-10">

          {/* Today's Plan */}
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={
              activeTab === "plan"
                ? "bg-lime-400 text-black px-5 py-2 rounded-full font-bold"
                : "border border-gray-500 px-5 py-2 rounded-full"
            }
          >
            Today's Plan
          </button>

          {/* Saved */}
          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={
              activeTab === "saved"
                ? "bg-lime-400 text-black px-5 py-2 rounded-full font-bold"
                : "border border-gray-500 px-5 py-2 rounded-full"
            }
          >
            Saved
          </button>

        </div>

        {/* ================================== */}
        {/* CONTENT */}
        {/* ================================== */}

        <div className="mt-10">

          {/* Loading */}
          {loading ? (

            <div className="text-center py-20">

              <div className="w-10 h-10 border-4 border-zinc-700 border-t-lime-400 rounded-full animate-spin mx-auto"></div>

              <p className="text-gray-400 mt-4">
                Loading workouts…
              </p>

            </div>

          ) : (

            <>

              {/* ================================== */}
              {/* SORT */}
              {/* ================================== */}

              <div className="flex justify-end mb-6">

                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value)
                  }
                  className="bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-full outline-none cursor-pointer"
                >

                  <option value="duration">
                    Sort By: Duration
                  </option>

                  <option value="calories">
                    Sort By: Calories
                  </option>

                  <option value="rating">
                    Sort By: Rating
                  </option>

                </select>

              </div>

              {/* ================================== */}
              {/* TODAY'S PLAN */}
              {/* ================================== */}

              {activeTab === "plan" && (

                plan.length === 0 ? (

                  <div className="text-center py-20">

                    <h2 className="text-3xl font-bold uppercase">
                      Nothing Here Yet
                    </h2>

                    <p className="text-gray-400 mt-3">
                      Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                      href="/"
                      className="inline-block mt-6 bg-lime-400 text-black px-6 py-3 rounded-full font-bold"
                    >
                      Go to Workouts
                    </Link>

                  </div>

                ) : (

                  <div className="space-y-5">

                    {sortedPlan.map((item) => (

                      <PlanCard
                        key={item.id}
                        workout={item}
                        onDone={handleDone}
                        onRemove={handleRemove}
                        isSaved={false}
                      />

                    ))}

                  </div>

                )

              )}

              {/* ================================== */}
              {/* SAVED */}
              {/* ================================== */}

              {activeTab === "saved" && (

                saved.length === 0 ? (

                  <div className="text-center py-20">

                    <h2 className="text-3xl font-bold uppercase">
                      Nothing Here Yet
                    </h2>

                    <p className="text-gray-400 mt-3">
                      Save a workout from the library to see it here.
                    </p>

                    <Link
                      href="/"
                      className="inline-block mt-6 bg-lime-400 text-black px-6 py-3 rounded-full font-bold"
                    >
                      Browse Workouts
                    </Link>

                  </div>

                ) : (

                  <div className="space-y-5">

                    {sortedSaved.map((item) => (

                      <PlanCard
                        key={item.id}
                        workout={item}
                        onRemove={handleRemoveSaved}
                        isSaved={true}
                      />

                    ))}

                  </div>

                )

              )}

            </>

          )}

        </div>

      </section>

      <Footer />

      {/* Toast */}
      <Toast
        message={message}
        type={messageType}
      />

    </main>
  );
}