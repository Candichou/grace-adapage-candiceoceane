import { TimelineComponents } from "../components/TimelineComponents";
import { profil } from "../data/profil";
import type { Timeline } from "../Types/data";

function Timeline() {
  return (
    <section>
      <div>
        {profil.timeline.map((event: Timeline, index: number) => (
          <TimelineComponents key={index} timeline={event} />
        ))}
      </div>
    </section>
  );
}

export default Timeline;
