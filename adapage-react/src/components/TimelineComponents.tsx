import type { Timeline } from "../Types/data";

interface TimelineProps {
  timeline: Timeline;
}

export function TimelineComponents({ timeline }: TimelineProps) {
  return (
    <section>
      <div>
        <p>
          {timeline.year} : {timeline.description}
        </p>
      </div>
    </section>
  );
}
