import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "FitLog",
  description: "Your personal workout tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />

        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}