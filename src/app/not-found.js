export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-5">
      <div className="text-center">

        <p className="text-lime-400 font-semibold">
          FITLOG
        </p>

        <h1 className="text-7xl md:text-9xl font-bold mt-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold uppercase mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-3">
          The workout or page you are looking for does not exist.
        </p>

       

      </div>
    </main>
  );
}