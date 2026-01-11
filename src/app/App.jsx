import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Router from "./router";
import MatrixRain from "../components/Matrixrain";

export default function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <div className="terminal-bg" />

      {/* ✅ Falling symbols */}
      <MatrixRain />

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <Router />
      </main>

      <Footer />
    </div>
  );
}
