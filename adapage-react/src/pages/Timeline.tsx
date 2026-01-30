import { TimelineComponents } from "../components/TimelineComponents";
import { profil } from "../data/profil";
import type { Timeline as TimelineType } from "../Types/data";

function Timeline() {
  return (
    <section className="min-h-screen bg-card py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-elips-orange mb-12">
          Chronologie
        </h1>

        {/* Conteneur centré */}
        <div className="relative">
          {/* Axe central (desktop) / Axe gauche (mobile) */}
          <div className="absolute top-0 bottom-0 left-2 md:left-1/2 md:-translate-x-1/2 w-1 bg-elips-orange"></div>

          <div className="flex flex-col gap-12 md:gap-16">
            {profil.timeline.map((event: TimelineType, index: number) => (
              <TimelineComponents key={index} timeline={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
