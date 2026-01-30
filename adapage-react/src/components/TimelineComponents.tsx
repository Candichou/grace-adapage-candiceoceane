import type { Timeline } from "../Types/data";

interface TimelineProps {
  timeline: Timeline;
}

export function TimelineComponents({ timeline }: TimelineProps) {
  return (
    <div className="relative flex flex-col md:flex-row w-full max-w-3xl mx-auto">
      {/* Mobile : Point à gauche */}
      <div className="absolute left-0 md:hidden z-10">
        <div className="w-5 h-5 bg-elips-orange rounded-full shadow-lg"></div>
      </div>

      {/* Colonne gauche (année) - Cachée sur mobile */}
      <div className="hidden md:block md:w-1/2 text-right pr-8">
        <span className="text-2xl font-bold text-elips-gold">
          {timeline.year}
        </span>
      </div>

      {/* Point centré - Desktop uniquement */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-5 bg-elips-orange rounded-full shadow-lg"></div>
      </div>

      {/* Colonne droite (contenu) */}
      <div className="w-full pl-10 md:pl-8 md:w-1/2">
        {/* Année visible sur mobile uniquement */}
        <span className="text-xl font-bold text-elips-gold md:hidden mb-2 block">
          {timeline.year}
        </span>
        <div className="bg-white/80 p-4 rounded-lg border border-elips-orange/20 shadow-md">
          <p className="text-elips-black/80">{timeline.description}</p>
        </div>
      </div>
    </div>
  );
}
