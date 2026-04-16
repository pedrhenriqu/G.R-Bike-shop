import { createFileRoute } from "@tanstack/react-router";
import grBikeLogo from "@/assets/gr-bike-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GR Bike — Garanta sua vaga" },
      {
        name: "description",
        content: "Você está a um passo de pedalar com a GR Bike. Vagas limitadas — participe agora.",
      },
      { property: "og:title", content: "GR Bike — Garanta sua vaga" },
      {
        property: "og:description",
        content: "Você está a um passo de pedalar com a GR Bike. Vagas limitadas.",
      },
    ],
  }),
});

const FORM_URL = "https://forms.google.com/";

function Index() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-md flex flex-col items-center text-center gap-8">
        {/* Logo */}
        <img
          src={grBikeLogo}
          alt="GR Bike — Shop & Service"
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-contain"
        />

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
          Você está a um passo de pedalar com a GR Bike 🚴‍♂️
        </h1>

        {/* Subtexto */}
        <p className="text-base sm:text-lg text-white/80">
          Garanta sua vaga agora mesmo.
        </p>

        {/* CTA */}
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pulse-cta w-full rounded-full py-5 text-lg font-extrabold tracking-wide text-black shadow-lg active:scale-[0.98] transition-transform"
          style={{ backgroundColor: "#F5CF2F" }}
        >
          QUERO PARTICIPAR 🚴‍♂️
        </a>

        {/* Urgência */}
        <p className="text-base font-semibold text-white/90">
          ⚠️ Vagas limitadas
        </p>
      </div>
    </main>
  );
}
