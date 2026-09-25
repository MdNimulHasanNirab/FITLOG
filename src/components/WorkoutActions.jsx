"use client";

import { useState } from "react";

import {
  getPlan,
  savePlan,
  getSaved,
  saveSaved,
} from "@/utils/storage";

import Toast from "@/components/toast";

export default function WorkoutActions({ workout }) {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // Show toast
  function showMessage(text, type = "success") {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
    }, 3500);
  }

  // Add workout to today's plan
  function addToPlan() {
    const plan = getPlan();

    const alreadyExists = plan.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      showMessage(
        "Workout is already in today's plan",
        "success"
      );
      return;
    }

    if (plan.length >= 5) {
      showMessage(
        "Today's plan can have only 5 workouts",
        "success"
      );
      return;
    }

    const newPlan = [...plan, workout];

    savePlan(newPlan);

    window.dispatchEvent(
      new Event("fitlog-update")
    );

    showMessage(
      "Added to today's plan",
      "success"
    );
  }

  // Save workout for later
  function saveForLater() {
    const saved = getSaved();

    const alreadyExists = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      showMessage(
        "Workout is already saved",
        "success"
      );
      return;
    }

    const newSaved = [...saved, workout];

    saveSaved(newSaved);

    window.dispatchEvent(
      new Event("fitlog-update")
    );

    showMessage(
      "Workout saved for later",
      "success"
    );
  }

  return (
    <>
      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">

        {/* Add to Plan */}
        <button
          onClick={addToPlan}
          className="bg-[#CCFF00] text-black px-6 py-3 rounded-xl font-bold hover:bg-lime-300"
        >
          Add to Plan
        </button>

        {/* Save Workout */}
        <button
          onClick={saveForLater}
          className="border border-zinc-700 px-6 py-3 rounded-xl font-semibold hover:border-[#CCFF00] hover:text-[#CCFF00]"
        >
          Save Workout
        </button>

      </div>

      {/* Toast */}
      <Toast
        message={message}
        type={messageType}
      />
    </>
  );
}