const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts() {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });

  return res.json();
}

export async function getWorkout(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    cache: "no-store",
  });

  return res.json();
}