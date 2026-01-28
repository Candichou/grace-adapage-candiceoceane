import type { Quotes } from "../Types/data";

interface QuotesProps {
  quotes: Quotes;
}

export function QuotesComponents({ quotes }: QuotesProps) {
  return (
    <section>
      <div>
        <p>
          "{quotes.text}" — <em>{quotes.source}</em>
        </p>
      </div>
    </section>
  );
}
