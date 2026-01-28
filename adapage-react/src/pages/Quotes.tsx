import { profil } from "../data/profil";
import { QuotesComponents } from "../components/QuotesComponents";

export default function Quotes() {
  return (
    <div>
      {profil.quotes.map((quote, index: number) => (
        <QuotesComponents key={index} quotes={quote} />
      ))}
    </div>
  );
}
