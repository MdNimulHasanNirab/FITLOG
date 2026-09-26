# FitLog 🏋️

FitLog is a dark-themed workout library and personal workout planner built with Next.js.

It allows users to browse workouts, view detailed workout information, add exercises to Today's Plan, save workouts for later, sort workouts, and manage their workout plan using LocalStorage.

---

## 🚀 Live Demo



[https://your-fitlog-project.vercel.app](https://fitlong.netlify.app)

---

## 📌 Project Overview

FitLog is designed as a simple and clean workout management application.

Users can:

- Browse the workout library
- View individual workout details
- Add workouts to Today's Plan
- Save workouts for later
- Mark planned workouts as completed
- Remove workouts from Today's Plan
- Remove workouts from Saved
- Sort workouts by duration, calories, or rating
- View workout statistics
- Use the application on mobile, tablet, and desktop

---

## 🛠️ Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- Next.js App Router
- LocalStorage
- REST API
- ESLint

---

## ✨ Key Features

### 1. Workout Library

Users can browse all available workouts from the FitLog API.

Each workout card displays:

- Workout image
- Muscle group/category
- Workout name
- Equipment
- Duration
- Calories
- Rating

---

### 2. Workout Details

Each workout has its own details page.

The details page includes:

- Large workout image
- Workout name
- Description
- Muscle groups
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Step-by-step instructions

---

### 3. Today's Plan

Users can add workouts to Today's Plan.

The My Plan page displays:

- Total exercises
- Total minutes
- Total calories
- Workout cards
- View Details button
- Mark as Done button
- Remove button

When a workout is marked as Done, it is removed from Today's Plan.

---

### 4. Saved Workouts

Users can save workouts for later.

Saved workouts include:

- View Details
- Remove

Saved workouts do not have the Mark as Done option.

---

### 5. Workout Sorting

Users can sort their current workout list by:

- Duration
- Calories
- Rating

The sorting system works on both:

- Today's Plan
- Saved

---

### 6. LocalStorage

FitLog uses browser LocalStorage to keep:

- Today's Plan
- Saved Workouts

This allows the user's selected workouts to remain available after refreshing the page.

---

### 7. Dynamic Navbar Counters

The Navbar displays live counters for:

- Plan
- Saved

The counters update when workouts are added or removed.

---

### 8. Toast Notifications

FitLog displays toast notifications for important actions such as:

- Workout added
- Workout saved
- Workout completed
- Workout removed

---

### 9. Responsive Design

The application is responsive and designed to work on:

- Mobile
- Tablet
- Desktop

The workout grid, navigation, hero section, cards, and plan layout adjust according to screen size.

---

### 10. Loading and Error Handling

The application includes loading states while workout data is being loaded.

A custom 404 page is also included for invalid routes.

---

## 🔗 API

FitLog uses the following API:

### All Workouts

https://api.abcz.workers.dev/api/fitlog

### Single Workout

https://api.abcz.workers.dev/api/fitlog/:id

---

## 📂 Project Structure

```text
my-app/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── not-found.js
│   │
│   ├── my-plan/
│   │   └── page.js
│   │
│   └── workout/
│       └── [id]/
│           └── page.js
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── WorkoutCard.jsx
│   ├── PlanCard.jsx
│   ├── WorkoutActions.jsx
│   ├── Toast.jsx
│   └── Footer.jsx
│
├── utils/
│   ├── api.js
│   └── storage.js
│
├── public/
│   ├── logo.svg
│   └── hero.png
│
├── jsconfig.json
├── package.json
├── next.config.mjs
└── README.md
