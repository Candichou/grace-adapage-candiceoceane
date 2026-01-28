import type { InfoCard } from "../Types/data";

interface InfoCardProps {
  infocard: InfoCard;
}

export function InfoCardComponents({ infocard }: InfoCardProps) {
  return (
    <section>
      <div>
        <p>
          {infocard.title} : {infocard.value}
        </p>
      </div>
    </section>
  );
}
