"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
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

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    const planData = getPlan();
    const savedData = getSaved();

    setPlan(planData);
    setSaved(savedData);
    setLoading(false);
  }, []);

  // Show toast message
  function showMessage(text, type = "success") {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
    }, 3500);
  }

  // Mark workout as done
  function handleDone(workout) {
    const updatedPlan = plan.map((item) => {
      if (item.id === workout.id) {
        return {
          ...item,
          done: true,
        };
      }

      return item;
    });

    setPlan(updatedPlan);
    savePlan(updatedPlan);

    window.dispatchEvent(new Event("fitlog-update"));

    showMessage(`${workout.name} marked as done`, "success");
  }

  // Remove workout from Today's Plan
  function handleRemove(id) {
    const updatedPlan = plan.filter(
      (item) => item.id !== id
    );

    setPlan(updatedPlan);
    savePlan(updatedPlan);

    window.dispatchEvent(new Event("fitlog-update"));

    showMessage(
      "Workout removed from today's plan",
      "delete"
    );
  }

  // Remove workout from Saved
  function handleRemoveSaved(id) {
    const updatedSaved = saved.filter(
      (item) => item.id !== id
    );

    setSaved(updatedSaved);
    saveSaved(updatedSaved);

    window.dispatchEvent(new Event("fitlog-update"));

    showMessage(
      "Workout removed from saved",
      "delete"
    );
  }

  // Total minutes
  const totalMinutes = plan.reduce(
    (total, workout) =>
      total + Number(workout.duration || 0),
    0
  );

  // Total calories
  const totalCalories = plan.reduce(
    (total, workout) =>
      total + Number(workout.caloriesBurned || 0),
    0
  );

  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-6xl mx-auto px-5 py-16">

        {/* Page Title */}
        <h1 className="text-5xl font-bold uppercase">
          My Plan
        </h1>

        <p className="text-gray-400 mt-3">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

          {/* Exercises */}
          <div className="bg-zinc-900 p-5 rounded-xl">
            <p className="text-gray-400">
              Exercises
            </p>

            <h3 className="text-3xl font-bold">
              {plan.length}
            </h3>
          </div>

          {/* Minutes */}
          <div className="bg-zinc-900 p-5 rounded-xl">
            <p className="text-gray-400">
              Minutes
            </p>

            <h3 className="text-3xl font-bold">
              {totalMinutes}
            </h3>
          </div>

          {/* Calories */}
          <div className="bg-zinc-900 p-5 rounded-xl">
            <p className="text-gray-400">
              Calories
            </p>

            <h3 className="text-3xl font-bold">
              {totalCalories}
            </h3>
          </div>

        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-10">

          <button
            onClick={() => setActiveTab("plan")}
            className={
              activeTab === "plan"
                ? "bg-lime-400 text-black px-5 py-2 rounded-full font-bold"
                : "border border-gray-500 px-5 py-2 rounded-full"
            }
          >
            Today's Plan
          </button>

          <button
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

        {/* Workout List */}
        <div className="mt-10">

          {/* Loading */}
          {loading ? (
            <div className="text-center py-20">

              <div className="w-10 h-10 border-4 border-zinc-700 border-t-lime-400 rounded-full animate-spin mx-auto"></div>

              <p className="text-gray-400 mt-4">
                Loading workouts…
              </p>

            </div>
          ) : activeTab === "plan" ? (

            /* Today's Plan */
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

                {plan.map((item) => (
                  <PlanCard
                    key={item.id}
                    workout={item}
                    onDone={handleDone}
                    onRemove={handleRemove}
                  />
                ))}

              </div>

            )

          ) : (

            /* Saved */
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

                {saved.map((item) => (
                  <PlanCard
                    key={item.id}
                    workout={item}
                    onRemove={() =>
                      handleRemoveSaved(item.id)
                    }
                  />
                ))}

              </div>

            )
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