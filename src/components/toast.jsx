"use client";

export default function Toast({ message, type = "success" }) {
  if (!message) return null;

  const isDelete = type === "delete";

  return (
    <div className="fixed top-24 right-5 z-[100] animate-[toastIn_0.9s_ease-out]">

      <div
        className={`flex items-center gap-3 bg-zinc-900 rounded-2xl px-5 py-4 shadow-lg ${
          isDelete
            ? "border border-red-500 shadow-red-500/20"
            : "border border-lime-400 shadow-lime-400/20"
        }`}
      >

        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold ${
            isDelete
              ? "bg-red-500 text-white"
              : "bg-lime-400 text-black"
          }`}
        >
          {isDelete ? "✕" : "✓"}
        </div>

        {/* Message */}
        <div>
          <p
            className={`font-bold text-sm ${
              isDelete
                ? "text-red-400"
                : "text-lime-400"
            }`}
          >
            FITLOG
          </p>

          

      </div>
    </div>
  );
}