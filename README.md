# FitLog — Workout Tracker

FitLog is a modern workout tracking web application built with Next.js. It allows users to explore workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and track their daily workout statistics.

## 🚀 Live Demo

Add your Vercel deployment URL here after deployment:

**Live Website:** `https://your-fitlog-project.vercel.app`

## 📌 Project Overview

FitLog provides a simple and responsive interface for discovering and organizing workouts.

Users can:

* Browse available workouts
* Sort workouts by duration, calories, or rating
* View detailed information about each workout
* Add workouts to today's plan
* Save workouts for later
* Remove workouts from their plan
* Mark workouts as completed
* Track total exercises, minutes, and calories
* Receive toast notifications for important actions

The project uses LocalStorage to keep the user's plan and saved workouts available after refreshing the page.

## ✨ Features

### 1. Workout Library

* Fetches workout data from an external API
* Displays workout images
* Shows muscle groups
* Shows equipment
* Displays duration, calories, and rating
* Responsive workout card layout

### 2. Workout Details

Each workout has its own dynamic detail page.

The detail page includes:

* Workout image
* Workout name
* Difficulty
* Muscle groups
* Description
* Duration
* Calories
* Sets
* Reps
* Equipment
* Rating
* Step-by-step instructions

### 3. My Plan

Users can create a daily workout plan.

Features include:

* Add workout to today's plan
* Maximum of 5 workouts
* Remove workouts
* Mark workouts as completed
* View workout details

### 4. Saved Workouts

Users can save workouts for later.

Saved workouts can be:

* Viewed
* Removed
* Opened through the workout details page

### 5. Workout Statistics

The My Plan page automatically calculates:

* Total exercises
* Total workout minutes
* Total calories

### 6. Sorting

The workout library can be sorted by:

* Duration
* Calories
* Rating

### 7. LocalStorage

FitLog uses browser LocalStorage to preserve:

* Today's workout plan
* Saved workouts
* Completed workout status

This allows the data to remain available after refreshing the browser.

### 8. Toast Notifications

Users receive feedback when performing actions such as:

* Adding a workout
* Saving a workout
* Removing a workout
* Marking a workout as completed
* Trying to add a duplicate workout
* Reaching the 5-workout limit

### 9. Loading State

A loading animation is displayed while workout data is being fetched.

### 10. 404 Page

A custom 404 page is included for:

* Unknown routes
* Invalid pages
* Invalid workout URLs

## 🛠️ Technologies Used

* Next.js
* React
* JavaScript
* Tailwind CSS
* Next.js App Router
* LocalStorage
* REST API
* ESLint
* Vercel

## 🔗 API

FitLog uses the following workout API:

```text
https://api.abcz.workers.dev/api/fitlog
```

Single workout:

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

## 📁 Project Structure

```text
FitLog/
│
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── loading.js
│   │   ├── not-found.js
│   │   ├── globals.css
│   │   │
│   │   ├── my-plan/
│   │   │   └── page.js
│   │   │
│   │   └── workout/
│   │       └── [id]/
│   │           └── page.js
│   │
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── WorkoutCard.jsx
│       ├── WorkoutLibrary.jsx
│       ├── PlanCard.jsx
│       ├── WorkoutActions.jsx
│       ├── Toast.jsx
│       └── Footer.jsx
│
├── utils/
│   ├── api.js
│   └── storage.js
│
├── public/
│
├── package.json
├── README.md
└── ...
```

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

```bash
cd FitLog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To run the production version:

```bash
npm start
```

## 📱 Responsive Design

FitLog is designed to work across:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

The workout library uses a responsive grid that adapts to different screen sizes.

## ☁️ Deployment

The project can be deployed using Vercel.

Recommended deployment process:

1. Push the project to GitHub
2. Import the repository into Vercel
3. Select Next.js as the framework
4. Deploy the project
5. Test all routes after deployment

Important routes to test after deployment:

```text
/
 /my-plan
 /workout/[id]
```

Also test an invalid route to verify the custom 404 page.

## 🎯 Project Goals

The main goal of FitLog is to provide a simple and modern workout management experience where users can discover exercises, organize their daily workouts, and track basic workout statistics.

## 👨‍💻 Developer

**Md. Nimul Hasan Nirab**

BSc in Computer Science & Engineering

### Focus Areas

* AI & Prompt Development
* Web Development
* Creative Technology
* UI/UX & Graphic Design
* Future Cybersecurity Learning

## 📄 License

This project was created as an academic/project assignment and for learning purposes.
